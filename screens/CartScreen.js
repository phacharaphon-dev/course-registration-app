import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { getCartAPI, removeFromCartAPI, confirmEnrollmentAPI } from "../api";

export default function CartScreen({ student, setView }) {
  const [items, setItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setLoadingCart(true);
    try {
      const data = await getCartAPI(student?.student_id);
      // Grouping Logic ของคุณ
      const grouped = data.reduce((acc, item) => {
        const code = item.course_code;
        if (!code) return acc;
        if (!acc[code]) {
          acc[code] = { course_code: code, course_name: item.course_name, time_info: item.time_info || "", sections: [] };
        }
        if (!acc[code].sections.includes(item.section_number)) {
          acc[code].sections.push(item.section_number);
        }
        return acc;
      }, {});
      setItems(Object.values(grouped));
    } catch (e) {
      Alert.alert("Error", e.message);
    } finally {
      setLoadingCart(false);
    }
  };

  const totalCredits = items.reduce((sum, item) => {
    const c = parseInt(item.credits) || 3;
    return sum + c;
  }, 0);

  const removeItem = (courseCode) => {
    Alert.alert("ลบวิชา", `ต้องการลบ ${courseCode} ออกจากตะกร้าหรือไม่?`, [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          try {
            await removeFromCartAPI(student.student_id, courseCode);
            setItems((prev) => prev.filter((i) => i.course_code !== courseCode));
          } catch (e) {
            Alert.alert("ข้อผิดพลาด", e.message);
          }
        },
      },
    ]);
  };

  const confirmRegistration = () => {
    Alert.alert("ยืนยัน", "ต้องการลงทะเบียนวิชาในตะกร้าทั้งหมดหรือไม่?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ยืนยัน",
        onPress: async () => {
          try {
            await confirmEnrollmentAPI(student.student_id);
            Alert.alert("สำเร็จ", "ลงทะเบียนเรียบร้อย!");
            setView("SCHEDULE"); // ไปหน้าตารางเรียน
          } catch (e) {
            Alert.alert("ข้อผิดพลาด", e.message);
          }
        },
      },
    ]);
  };

  return (
    <LinearGradient colors={["#FFDAE4", "#FFF8F8"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.3 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => setView("MENU")} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="#7b5455" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>ตะกร้าของฉัน</Text>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialIcons name="more-vert" size={24} color="#514345" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Summary Header */}
          <View style={styles.summaryHeader}>
            <View>
              <Text style={styles.summarySub}>CART SUMMARY</Text>
              <Text style={styles.summaryTitle}>รายการในตะกร้า</Text>
            </View>
            <View style={styles.summaryRight}>
              <Text style={styles.totalText}>ทั้งหมด</Text>
              <Text style={styles.totalCreditsText}>{totalCredits} หน่วยกิต</Text>
            </View>
          </View>

          {/* Main Content */}
          {loadingCart ? (
            <View style={styles.centerContainer}>
              <ActivityIndicator size="large" color="#D23669" />
            </View>
          ) : items.length === 0 ? (
            <View style={styles.centerContainer}>
              <MaterialIcons name="remove-shopping-cart" size={64} color="rgba(167, 51, 85, 0.2)" />
              <Text style={styles.emptyText}>ยังไม่มีวิชาในตะกร้า</Text>
            </View>
          ) : (
            <View style={styles.cardsContainer}>
              {items.map((item, idx) => (
                <View key={idx} style={styles.glassCard}>
                  <View style={styles.cardHeaderRow}>
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <View style={styles.courseIdBadge}>
                        <Text style={styles.courseIdText}>{item.course_code}</Text>
                      </View>
                      <Text style={styles.courseName}>{item.course_name}</Text>
                    </View>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => removeItem(item.course_code)}>
                      <MaterialIcons name="delete-outline" size={20} color="#ba1a1a" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.cardInfoRow}>
                    <View style={styles.infoItem}>
                      <MaterialIcons name="class" size={16} color="#a73355" />
                      <Text style={styles.infoText}>กลุ่มเรียน: {item.sections.join(", ")}</Text>
                    </View>
                    {item.time_info ? (
                      <View style={styles.infoItem}>
                        <MaterialIcons name="schedule" size={16} color="#a73355" />
                        <Text style={[styles.infoText, { fontWeight: 'bold' }]}>{item.time_info}</Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Floating Confirm Button (โชว์เฉพาะตอนมีของในตะกร้า) */}
        {!loadingCart && items.length > 0 && (
          <View style={styles.floatingButtonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmRegistration}>
              <LinearGradient colors={["#7b5455", "#a73355"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.btnGradient}>
                <MaterialIcons name="rocket-launch" size={20} color="white" />
                <Text style={styles.confirmBtnText}>ยืนยันการลงทะเบียน</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('MENU')}>
            <MaterialIcons name="home" size={24} color="#837375" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem} onPress={() => setView('SEARCH_COURSE')}>
            <MaterialIcons name="search" size={24} color="#837375" />
            <Text style={styles.navText}>SEARCH</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="shopping-cart" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>CART</Text>
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
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, zIndex: 10 },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  backButton: { padding: 4, marginLeft: -4 },
  headerTitle: { fontSize: 20, fontWeight: "900", color: "#7b5455", letterSpacing: -0.5 },
  bellButton: { padding: 4 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 180, paddingTop: 16 },
  summaryHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 },
  summarySub: { fontSize: 10, fontWeight: "bold", color: "#a73355", letterSpacing: 1 },
  summaryTitle: { fontSize: 24, fontWeight: "900", color: "#1f1a1c", letterSpacing: -0.5 },
  summaryRight: { alignItems: "flex-end" },
  totalText: { fontSize: 12, color: "#514345", fontWeight: "500" },
  totalCreditsText: { fontSize: 16, fontWeight: "bold", color: "#a73355" },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 60 },
  emptyText: { marginTop: 16, fontSize: 16, fontWeight: "bold", color: "#837375" },
  cardsContainer: { gap: 16 },
  glassCard: { backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: 16, padding: 20, borderWidth: 1, borderColor: "rgba(214, 194, 196, 0.2)", shadowColor: "rgba(167, 51, 85, 0.05)", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 12, elevation: 2 },
  cardHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 },
  courseIdBadge: { alignSelf: "flex-start", backgroundColor: "rgba(255, 119, 153, 0.2)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginBottom: 6 },
  courseIdText: { color: "#a73355", fontSize: 10, fontWeight: "bold", letterSpacing: 0.5 },
  courseName: { fontSize: 16, fontWeight: "bold", color: "#1f1a1c" },
  deleteButton: { padding: 8, backgroundColor: "#ffdad6", borderRadius: 12, justifyContent: "center", alignItems: "center" },
  cardInfoRow: { gap: 6 },
  infoItem: { flexDirection: "row", alignItems: "center", gap: 8 },
  infoText: { fontSize: 12, color: "#514345" },
  floatingButtonContainer: { position: "absolute", bottom: 95, left: 24, right: 24, zIndex: 20 },
  confirmButton: { borderRadius: 28, overflow: "hidden", shadowColor: "#a73355", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 8 },
  btnGradient: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 16, gap: 12 },
  confirmBtnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  bottomNav: { position: "absolute", bottom: 20, left: 16, right: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#ffffff", borderRadius: 40, paddingHorizontal: 8, paddingVertical: 8, shadowColor: "#a73355", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItemActive: { alignItems: "center", backgroundColor: "#FDEEF4", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 24 },
  navTextActive: { fontSize: 9, fontWeight: "bold", color: "#a73355", marginTop: 4, letterSpacing: 0.5 },
  navItem: { alignItems: "center", paddingHorizontal: 8, paddingVertical: 10 },
  navText: { fontSize: 9, fontWeight: "bold", color: "#837375", marginTop: 4, letterSpacing: 0.5 },
  logoutBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#FDEEF4", justifyContent: "center", alignItems: "center", marginRight: 4 },
});