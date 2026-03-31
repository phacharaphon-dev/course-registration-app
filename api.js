// api.js — จุดเดียวสำหรับ call ทุก API
// ✅ แก้ IP ที่นี่ที่เดียว ไม่ต้องแก้ทุกไฟล์

export const BASE_URL = "http://10.0.2.2:8000";
// สำหรับเครื่องจริง: เปลี่ยนเป็น IP เครื่องคอม เช่น "http://192.168.1.x:8000"

/**
 * Wrapper fetch พร้อม error handling กลาง
 * ถ้า response ไม่ ok จะ throw error พร้อม detail จาก backend
 */
export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");
  }
  return data;
}

// --- Auth ---
export const loginAPI = (student_id, password) =>
  apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ student_id, password }),
  });

// --- Courses ---
export const getAvailableCoursesAPI = (student_id) =>
  apiFetch(`/courses/available/${student_id}`);

export const getSectionsAPI = (course_code) =>
  apiFetch(`/sections/${course_code}`);

// --- Cart ---
export const getCartAPI = (student_id) =>
  apiFetch(`/cart/${student_id}`);

export const addToCartAPI = (student_id, course_code, section_number) =>
  apiFetch("/cart/add", {
    method: "POST",
    body: JSON.stringify({ student_id, course_code, section_number }),
  });

export const removeFromCartAPI = (student_id, course_code) =>
  fetch(`${BASE_URL}/cart/remove/${student_id}/${course_code}`, {
    method: "DELETE",
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "ลบไม่สำเร็จ");
    return data;
  });

// --- Enrollment ---
export const confirmEnrollmentAPI = (student_id) =>
  apiFetch(`/enroll/confirm/${student_id}`, { method: "POST" });

export const getScheduleAPI = (student_id) =>
  apiFetch(`/enroll/my/${student_id}`);

// --- AI ---
export const aiSuggestAPI = (student_id, course_codes) =>
  apiFetch("/ai-suggest", {
    method: "POST",
    body: JSON.stringify({ student_id, course_codes }),
  });

// --- Batch ---
export const batchAddRequiredAPI = async (student_id) => {
  const courses = await getAvailableCoursesAPI(student_id);
  const required = courses.filter((c) => c.is_required);
  for (const c of required) {
    await addToCartAPI(student_id, c.course_code, "1");
  }
  return required.length;
};
