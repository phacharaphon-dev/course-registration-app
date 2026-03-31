import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegistrationScreen({ student, setView }) {
  
  // ข้อมูลวิชาภาคยกชุดจำลอง (ตามรูปเป๊ะๆ)
  const seriesCourses = [
    { 
      code: 'CPE407', credits: 3, name: 'เครือข่ายสื่อสารคอมพิวเตอร์', 
      seatsLeft: 12, theory: 'Sec 002 | Fri 09:00 - 10:40', lab: 'Sec 002 | Fri 13:00 - 15:30' 
    },
    { 
      code: 'CPE495', credits: 3, name: 'หัวข้อพิเศษวิศวกรรมคอมพิวเตอร์', 
      seatsLeft: 5, theory: 'Sec 001 | Mon 09:00 - 11:30', lab: null 
    },
    { 
      code: 'CPE451', credits: 3, name: 'โปรแกรมประยุกต์', 
      seatsLeft: 20, theory: 'Sec 002 | Tue 11:00 - 12:40', lab: 'Sec 002 | Tue 13:00 - 15:30' 
    },
    { 
      code: 'CPE408', credits: 3, name: 'เครือข่ายสื่อสารคอมพิวเตอร์', // อิงตามรูปเรฟเฟอเรนซ์
      seatsLeft: 8, theory: 'Sec 001 | Sat 09:00 - 10:40', lab: 'Sec 001 | Sat 13:00 - 15:30' 
    },
  ];

  const handleConfirmBatch = () => {
    Alert.alert(
      "ยืนยันการลงทะเบียน", 
      "คุณต้องการลงทะเบียนวิชาภาคฯ ยกชุด (4 รายวิชา) ใช่หรือไม่?",
      [
        { text: "ยกเลิก", style: "cancel" },
        { text: "ตกลง", onPress: () => Alert.alert("สำเร็จ!", "ลงทะเบียนเรียบร้อยแล้ว") }
      ]
    );
  };

  return (
    <LinearGradient colors={['#FDEEF4', '#FFF8F8']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header & Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setView('MENU')} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#a73355" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ลงทะเบียนวิชาภาคฯ ยกชุด</Text>
          <View style={{ width: 40 }} /> {/* Spacer */}
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
              <View style={styles.statusDot} />
            </View>
            <View>
              <Text style={styles.welcomeSubText}>ยินดีต้อนรับ</Text>
              <Text style={styles.welcomeText}>สวัสดี {student?.first_name || 'พชรพล'}</Text>
            </View>
          </View>

          {/* Section Title */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>รายชื่อวิชาภาคฯ (Series)</Text>
            <View style={styles.badgeCount}>
              <Text style={styles.badgeCountText}>{seriesCourses.length} รายวิชา</Text>
            </View>
          </View>

          {/* Course List */}
          {seriesCourses.map((course, idx) => (
            <View key={idx} style={styles.courseCard}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseCode}>{course.code} • {course.credits} CREDITS</Text>
                <View style={styles.seatsBadge}>
                  <Text style={styles.seatsText}>{course.seatsLeft} Left</Text>
                </View>
              </View>
              <Text style={styles.courseName}>{course.name}</Text>
              
              <View style={styles.timeInfoContainer}>
                <View style={styles.timeRow}>
                  <MaterialIcons name="menu-book" size={12} color="#D23669" />
                  <Text style={styles.timeText}>Theory: {course.theory}</Text>
                </View>
                {course.lab && (
                  <View style={styles.timeRow}>
                    <MaterialIcons name="science" size={12} color="#D23669" />
                    <Text style={styles.timeText}>Lab: {course.lab}</Text>
                  </View>
                )}
              </View>
            </View>
          ))}

          {/* Info/Warning Box */}
          <View style={styles.infoBox}>
            <MaterialIcons name="info-outline" size={20} color="#a73355" style={{ marginTop: 2 }} />
            <Text style={styles.infoText}>
              การลงทะเบียนยกชุดจะทำการจองที่นั่งให้คุณทันทีในเซกชันที่กำหนด กรุณาตรวจสอบเวลาเรียนที่ซ้อนทับกันก่อนกดยืนยัน
            </Text>
          </View>

        </ScrollView>

        {/* Floating Confirm Button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirmBatch}>
            <LinearGradient colors={['#D23669', '#a73355']} style={styles.confirmGradient} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
              <FontAwesome5 name="bolt" size={18} color="white" style={{ marginRight: 8 }} />
              <Text style={styles.confirmBtnText}>ยืนยันลงทะเบียนคลิกเดียว</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.footerText}>CURATED BY SCHOLASTIC EDITORIAL TEAM</Text>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(210, 54, 105, 0.1)', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1f1a1c' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 150 },
  
  profileSection: { flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 10, marginBottom: 25 },
  profileImageContainer: { position: 'relative' },
  profileImage: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'white' },
  statusDot: { position: 'absolute', bottom: 2, right: 2, width: 14, height: 14, backgroundColor: '#22c55e', borderRadius: 7, borderWidth: 2, borderColor: '#fff' },
  welcomeSubText: { fontSize: 11, color: '#514345', fontWeight: 'bold', marginBottom: 2 },
  welcomeText: { fontSize: 22, fontWeight: '900', color: '#1f1a1c' },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1f1a1c' },
  badgeCount: { backgroundColor: 'rgba(210, 54, 105, 0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeCountText: { fontSize: 10, fontWeight: 'bold', color: '#a73355' },

  courseCard: { backgroundColor: 'white', borderRadius: 20, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(210, 54, 105, 0.1)', elevation: 1, shadowColor: '#D23669', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  courseHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  courseCode: { fontSize: 11, fontWeight: '900', color: '#a73355', letterSpacing: 0.5 },
  seatsBadge: { backgroundColor: '#FFF0F0', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  seatsText: { fontSize: 9, fontWeight: 'bold', color: '#D23669' },
  courseName: { fontSize: 14, fontWeight: 'bold', color: '#514345', marginBottom: 12 },
  timeInfoContainer: { gap: 6 },
  timeRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  timeText: { fontSize: 11, color: '#837375', fontWeight: '500' },

  infoBox: { flexDirection: 'row', backgroundColor: 'rgba(210, 54, 105, 0.05)', padding: 16, borderRadius: 16, marginTop: 10, gap: 10, borderWidth: 1, borderColor: 'rgba(210, 54, 105, 0.1)' },
  infoText: { flex: 1, fontSize: 11, color: '#514345', lineHeight: 18 },

  bottomContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 25, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 15, shadowColor: '#000', shadowOffset: { width: 0, height: -5 }, shadowOpacity: 0.05, shadowRadius: 10 },
  confirmBtn: { borderRadius: 16, overflow: 'hidden', marginBottom: 15 },
  confirmGradient: { flexDirection: 'row', paddingVertical: 18, justifyContent: 'center', alignItems: 'center' },
  confirmBtnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  footerText: { textAlign: 'center', fontSize: 8, fontWeight: 'bold', color: '#A0A0A0', letterSpacing: 1.5 }
});