import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, ActivityIndicator, SafeAreaView, StyleSheet, Image } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { getAvailableCoursesAPI, getSectionsAPI, addToCartAPI, getCartAPI } from "../api";

export default function ManualScreen({ student, setView }) {
  // ------------------- LOGIC & STATE (เหมือนเดิม 100%) -------------------
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sections, setSections] = useState([]);
  const [loadingSections, setLoadingSections] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => { fetchCartData(); }, []);

  const fetchCartData = async () => {
    try {
      const data = await getCartAPI(student.student_id);
      setCart(data);
    } catch (err) {
      console.error("Fetch Cart Error:", err);
    }
  };

  const isTimeOverlapping = (sec1, sec2) => {
    if (!sec1.day_of_week || !sec2.day_of_week) return false;
    if (sec1.day_of_week !== sec2.day_of_week) return false;
    const toInt = (t) => parseInt((t || "").replace(":", ""));
    const s1 = toInt(sec1.start_time), e1 = toInt(sec1.end_time);
    const s2 = toInt(sec2.start_time), e2 = toInt(sec2.end_time);
    return s1 < e2 && s2 < e1;
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return Alert.alert("⚠️ แจ้งเตือน", "กรุณากรอกรหัสวิชาหรือชื่อวิชา");
    }
    setLoading(true);
    try {
      const data = await getAvailableCoursesAPI(student.student_id);
      const q = searchQuery.toLowerCase();
      const filtered = data.filter(
        (c) => c.course_code.toLowerCase().includes(q) || c.course_name.toLowerCase().includes(q)
      );
      setCourses(filtered);
      setIsSearched(true);
      if (filtered.length === 0) Alert.alert("ไม่พบวิชา", "ลองค้นหาด้วยคำอื่นครับ");
    } catch (err) {
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCourse = async (course) => {
    if (selectedCourse?.course_code === course.course_code) {
      setSelectedCourse(null);
      return;
    }
    setSelectedCourse(course);
    setLoadingSections(true);
    try {
      const data = await getSectionsAPI(course.course_code);
      setSections(data);
    } catch (err) {
      Alert.alert("Error", err.message);
    } finally {
      setLoadingSections(false);
    }
  };

  const handleAddSection = async (section) => {
    if (section.enrolled_seats >= section.max_seats) {
      return Alert.alert("⚠️ ที่นั่งเต็ม", "ไม่สามารถเลือก Section นี้ได้");
    }
    const existing = cart.find((i) => i.course_code === selectedCourse.course_code);
    if (existing) {
      if (String(existing.section_number) === String(section.section_number)) {
        return Alert.alert("✅ เลือกครบแล้ว!", `Section ${section.section_number} ถูกเลือกไปแล้ว`);
      }
      return Alert.alert("❌ ข้ามกลุ่มเรียน", `เลือก Section ${existing.section_number} ไปแล้ว`);
    }
    const conflict = cart.find((i) => isTimeOverlapping(i, section));
    if (conflict) {
      return Alert.alert("⚠️ เวลาชนกัน!", `ทับซ้อนกับวิชา ${conflict.course_code}`);
    }
    try {
      await addToCartAPI(student.student_id, selectedCourse.course_code, String(section.section_number));
      Alert.alert("✅ สำเร็จ", `เพิ่ม Section ${section.section_number} ลงตะกร้าแล้ว`);
      fetchCartData();
    } catch (err) {
      Alert.alert("❌ ไม่สำเร็จ", err.message);
    }
  };

  // ------------------- UI (NEW LOOK) -------------------
  return (
    <LinearGradient colors={["#FFDAE4", "#FFF8F8"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.3 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => setView("MENU")} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="#7b5455" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>ค้นหาวิชาเรียน</Text>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialIcons name="filter-list" size={24} color="#514345" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputWrapper}>
              <Feather name="search" size={18} color="#a73355" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="รหัสวิชา หรือ ชื่อวิชา..."
                placeholderTextColor="#837375"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
              />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
              <LinearGradient colors={["#D23669", "#D23669"]} style={styles.searchBtnGradient}>
                {loading ? <ActivityIndicator color="#fff" size="small" /> : <Text style={styles.searchBtnText}>ค้นหา</Text>}
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Results List */}
          {!isSearched ? (
            <View style={styles.emptyState}>
              <View style={styles.emptyIconCircle}>
                <MaterialIcons name="search" size={40} color="rgba(167, 51, 85, 0.3)" />
              </View>
              <Text style={styles.emptyText}>พิมพ์รหัสวิชาเพื่อเริ่มจัดตารางเรียน</Text>
            </View>
          ) : (
            <FlatList
              data={courses}
              keyExtractor={(item) => item.course_code}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
              renderItem={({ item }) => (
                <View style={styles.courseWrapper}>
                  <TouchableOpacity 
                    onPress={() => handleSelectCourse(item)}
                    style={[styles.courseCard, selectedCourse?.course_code === item.course_code && styles.courseCardActive]}
                    activeOpacity={0.9}
                  >
                    <View style={styles.courseInfo}>
                      <View style={styles.codeBadge}>
                        <Text style={styles.codeText}>{item.course_code}</Text>
                      </View>
                      <Text style={styles.courseNameText}>{item.course_name}</Text>
                      <Text style={styles.courseMetaText}>{item.credits} หน่วยกิต | {item.course_group}</Text>
                    </View>
                    <MaterialIcons 
                      name={selectedCourse?.course_code === item.course_code ? "expand-less" : "expand-more"} 
                      size={24} color="#a73355" 
                    />
                  </TouchableOpacity>

                  {/* Sections List (Expandable) */}
                  {selectedCourse?.course_code === item.course_code && (
                    <View style={styles.sectionsContainer}>
                      {loadingSections ? (
                        <ActivityIndicator color="#a73355" style={{ margin: 20 }} />
                      ) : (
                        sections.map((sec, idx) => {
                          const isFull = sec.enrolled_seats >= sec.max_seats;
                          return (
                            <View key={idx} style={styles.sectionCard}>
                              <View style={styles.sectionInfo}>
                                <View style={styles.sectionHeaderRow}>
                                  <Text style={styles.sectionNumText}>Sec {sec.section_number}</Text>
                                  <View style={[styles.typeBadge, { backgroundColor: sec.type === "T" ? "#FDEEF4" : "#e6f0fa" }]}>
                                    <Text style={[styles.typeText, { color: sec.type === "T" ? "#a73355" : "#1a73e8" }]}>
                                      {sec.type === "T" ? "Theory" : "Lab"}
                                    </Text>
                                  </View>
                                </View>
                                <Text style={styles.sectionTimeText}>📅 {sec.day_of_week} • ⏰ {sec.start_time}-{sec.end_time}</Text>
                                <Text style={styles.sectionRoomText}>📍 {sec.room} | 👤 {sec.instructor || 'N/A'}</Text>
                                <Text style={[styles.seatText, { color: isFull ? "#ba1a1a" : "#22c55e" }]}>
                                  🪑 {sec.enrolled_seats}/{sec.max_seats} {isFull ? "(เต็ม)" : "(ว่าง)"}
                                </Text>
                              </View>
                              <TouchableOpacity 
                                style={[styles.addBtn, isFull && styles.addBtnDisabled]} 
                                disabled={isFull}
                                onPress={() => handleAddSection(sec)}
                              >
                                <Text style={styles.addBtnText}>เลือก</Text>
                              </TouchableOpacity>
                            </View>
                          );
                        })
                      )}
                    </View>
                  )}
                </View>
              )}
            />
          )}
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('MENU')}>
            <MaterialIcons name="home" size={24} color="#837375" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="search" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('CART')}>
            <MaterialIcons name="shopping-cart" size={24} color="#837375" />
            <Text style={styles.navText}>CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('SCHEDULE')}>
            <MaterialIcons name="calendar-today" size={24} color="#837375" />
            <Text style={styles.navText}>SCHEDULE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={() => setView('MENU')}>
            <MaterialIcons name="arrow-back" size={20} color="#a73355" />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  backButton: { padding: 4, marginLeft: -4 },
  headerTitle: { fontSize: 20, fontWeight: "900", color: "#7b5455" },
  bellButton: { padding: 4 },
  content: { flex: 1, paddingHorizontal: 20 },
  searchContainer: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  searchInputWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 16, paddingHorizontal: 16, height: 52, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#1f1a1c', fontWeight: '500' },
  searchBtn: { width: 80, borderRadius: 16, overflow: 'hidden', shadowColor: '#a73355', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  searchBtnGradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  searchBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  emptyState: { flex: 0.8, justifyContent: 'center', alignItems: 'center' },
  emptyIconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  emptyText: { fontSize: 14, color: '#837375', fontWeight: 'bold' },
  courseWrapper: { marginBottom: 12 },
  courseCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)', padding: 16, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)' },
  courseCardActive: { backgroundColor: '#fff', borderColor: '#FDEEF4', borderWidth: 2 },
  courseInfo: { flex: 1 },
  codeBadge: { alignSelf: 'flex-start', backgroundColor: '#FDEEF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginBottom: 6 },
  codeText: { fontSize: 11, fontWeight: 'bold', color: '#a73355' },
  courseNameText: { fontSize: 15, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 4 },
  courseMetaText: { fontSize: 11, color: '#837375' },
  sectionsContainer: { backgroundColor: 'rgba(255,255,255,0.4)', marginTop: -10, paddingTop: 20, paddingHorizontal: 12, paddingBottom: 12, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  sectionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 14, borderRadius: 16, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 4, elevation: 1 },
  sectionInfo: { flex: 1 },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  sectionNumText: { fontSize: 13, fontWeight: 'bold', color: '#1f1a1c' },
  typeBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  typeText: { fontSize: 10, fontWeight: 'bold' },
  sectionTimeText: { fontSize: 11, color: '#514345', marginBottom: 2 },
  sectionRoomText: { fontSize: 11, color: '#837375', marginBottom: 4 },
  seatText: { fontSize: 11, fontWeight: 'bold' },
  addBtn: { backgroundColor: '#D23669', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  addBtnDisabled: { backgroundColor: '#ccc' },
  addBtnText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  bottomNav: { position: "absolute", bottom: 20, left: 16, right: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#ffffff", borderRadius: 40, paddingHorizontal: 8, paddingVertical: 8, shadowColor: "#a73355", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItemActive: { alignItems: "center", backgroundColor: "#FDEEF4", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 24 },
  navTextActive: { fontSize: 9, fontWeight: "bold", color: "#a73355", marginTop: 4, letterSpacing: 0.5 },
  navItem: { alignItems: "center", paddingHorizontal: 8, paddingVertical: 10 },
  navText: { fontSize: 9, fontWeight: "bold", color: "#837375", marginTop: 4, letterSpacing: 0.5 },
  logoutBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#FDEEF4", justifyContent: "center", alignItems: "center", marginRight: 4 },
});