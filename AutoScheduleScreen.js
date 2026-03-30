import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AutoScheduleScreen({ navigation }) {
  // ข้อมูลแผนการเรียนจำลอง
  const plans = [
    { title: 'Plan A: Academic Focus', recommended: true, courses: ['CPE407', 'CPE495', 'CPE451', 'ENG325', 'HUM124'] },
    { title: 'Plan B: Balanced Schedule', recommended: false, courses: ['CPE408', 'ICT376', 'CPE495', 'HUM124'] },
    { title: 'Plan C: Morning Track', recommended: false, courses: ['CPE407', 'ICT376', 'ENG325'] },
    { title: 'Plan D: Condensed Days', recommended: false, courses: ['CPE451', 'CPE408', 'HUM124', 'ENG325'] },
  ];

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Top AppBar */}
        <View style={styles.header}>
          {/* เปลี่ยนปุ่มเมนูให้กดเพื่อย้อนกลับได้ */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuButton}>
            <MaterialIcons name="menu-open" size={28} color="#a73355" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>The Digital Curator</Text>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
          </View>
        </View>

        {/* Main Content Area */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Student Header */}
          <View style={styles.studentHeader}>
            <Text style={styles.welcomeText}>สวัสดี พชรพล</Text>
            <Text style={styles.majorText}>คณะวิศวกรรมคอมพิวเตอร์ • ชั้นปีที่ 3</Text>
          </View>

          {/* Page Intent */}
          <View style={styles.intentCard}>
            <Text style={styles.intentTitle}>สร้างตารางเรียนอัตโนมัติ</Text>
            <Text style={styles.intentDesc}>ระบบคัดเลือกแผนการเรียนที่ลงตัวที่สุดสำหรับคุณ เลือกรูปแบบที่ต้องการ</Text>
          </View>

          {/* Plans Grid */}
          <View style={styles.plansContainer}>
            {plans.map((plan, index) => (
              <View key={index} style={[styles.planCard, plan.recommended && styles.planCardRecommended]}>
                <View style={styles.planHeader}>
                  <Text style={styles.planTitle}>{plan.title}</Text>
                  {plan.recommended && (
                    <View style={styles.badgeRecommended}>
                      <Text style={styles.badgeText}>Recommended</Text>
                    </View>
                  )}
                </View>
                
                <View style={styles.tagsContainer}>
                  {plan.courses.map((course, idx) => (
                    <View key={idx} style={styles.courseTag}>
                      <Text style={styles.courseTagText}>{course}</Text>
                    </View>
                  ))}
                </View>

                <TouchableOpacity 
                style={[styles.detailButton, plan.recommended ? styles.btnRecommended : styles.btnNormal]}
                onPress={() => navigation.navigate('PlanDetail')}
                >
                  <Text style={styles.detailButtonText}>ดูรายละเอียด</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

        </ScrollView>

        {/* Navigation Bar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="auto-stories" size={24} color="#837375" />
            <Text style={styles.navText}>CURRICULUM</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="calendar-today" size={24} color="#837375" />
            <Text style={styles.navText}>SCHEDULE</Text>
          </TouchableOpacity>

          {/* Active Nav */}
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="architecture" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>PROGRESS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="local-library" size={24} color="#837375" />
            <Text style={styles.navText}>LIBRARY</Text>
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
  menuButton: { padding: 4, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.3)' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#3F0017' },
  profileImageContainer: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#ff7799', overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100, paddingTop: 8 },
  studentHeader: { marginBottom: 24, paddingHorizontal: 8 },
  welcomeText: { fontSize: 24, fontWeight: '800', color: '#3F0017', marginBottom: 4 },
  majorText: { fontSize: 10, fontWeight: 'bold', color: '#a73355', textTransform: 'uppercase', letterSpacing: 2 },
  intentCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 16, borderRadius: 16, borderColor: 'white', borderWidth: 1, marginBottom: 20 },
  intentTitle: { fontSize: 14, fontWeight: 'bold', color: '#3F0017', marginBottom: 4 },
  intentDesc: { fontSize: 11, fontWeight: '500', color: '#3F0017', opacity: 0.8, lineHeight: 18 },
  plansContainer: { gap: 16 },
  planCard: { backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: 'transparent' },
  planCardRecommended: { borderLeftWidth: 4, borderLeftColor: '#a73355' },
  planHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  planTitle: { fontSize: 11, fontWeight: '800', color: '#3F0017', textTransform: 'uppercase', letterSpacing: 0.5 },
  badgeRecommended: { backgroundColor: '#a73355', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  badgeText: { color: 'white', fontSize: 10, fontWeight: '800' },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 16 },
  courseTag: { backgroundColor: '#FDEEF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, borderWidth: 1, borderColor: 'rgba(167, 51, 85, 0.05)' },
  courseTagText: { fontSize: 10, fontWeight: 'bold', color: '#a73355' },
  detailButton: { width: '100%', height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  btnRecommended: { backgroundColor: '#FDEEF4', borderWidth: 2, borderColor: '#a73355' },
  btnNormal: { backgroundColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 2, borderColor: 'rgba(167, 51, 85, 0.2)' },
  detailButtonText: { fontSize: 12, fontWeight: 'bold', color: '#3F0017' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.85)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 40, borderTopRightRadius: 40 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 1 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24, transform: [{ translateY: -8 }] },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 1 },
});