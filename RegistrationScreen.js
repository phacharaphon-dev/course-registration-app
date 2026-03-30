import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RegistrationScreen({ navigation }) {
  const courses = [
    { id: 'CPE407', credit: '3 CREDITS', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', left: '12 Left', theory: 'Sec 002 | Fri 09:00 - 10:40', lab: 'Sec 002 | Fri 13:00 - 15:30' },
    { id: 'CPE495', credit: '3 CREDITS', title: 'หัวข้อพิเศษวิศวกรรมคอมพิวเตอร์', left: '5 Left', theory: 'Sec 001 | Mon 09:00 - 11:30', lab: null },
    { id: 'CPE451', credit: '3 CREDITS', title: 'โปรแกรมประยุกต์', left: '20 Left', theory: 'Sec 002 | Tue 11:00 - 12:40', lab: 'Sec 002 | Tue 13:00 - 15:30' },
    { id: 'CPE408', credit: '3 CREDITS', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', left: '8 Left', theory: 'Sec 001 | Sat 09:00 - 10:40', lab: 'Sec 001 | Sat 13:00 - 15:30' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialIcons name="arrow-back" size={24} color="#D23669" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ลงทะเบียนวิชาภาคฯ ยกชุด</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.studentInfo}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
            <View style={styles.statusDot} />
          </View>
          <View>
            <Text style={styles.welcomeTextSmall}>ยินดีต้อนรับ</Text>
            <Text style={styles.welcomeTextLarge}>สวัสดี พชรพล</Text>
          </View>
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>รายชื่อวิชาภาคฯ (Series)</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>4 รายวิชา</Text>
          </View>
        </View>

        <View style={styles.courseContainer}>
          {courses.map((course, index) => (
            <View key={index} style={styles.courseCard}>
              <View style={styles.cardTopRow}>
                <Text style={styles.courseId}>{course.id} • {course.credit}</Text>
                <View style={styles.seatBadge}>
                  <Text style={styles.seatText}>{course.left}</Text>
                </View>
              </View>
              <Text style={styles.courseTitle}>{course.title}</Text>
              
              <View style={styles.scheduleRow}>
                <MaterialIcons name="menu-book" size={16} color="#514345" />
                <Text style={styles.scheduleText}>Theory: {course.theory}</Text>
              </View>
              
              {course.lab && (
                <View style={styles.scheduleRow}>
                  <MaterialIcons name="science" size={16} color="#514345" />
                  <Text style={styles.scheduleText}>Lab: {course.lab}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.infoBanner}>
          <MaterialIcons name="info" size={24} color="#D23669" />
          <Text style={styles.infoText}>
            การลงทะเบียนยกชุดจะทำการจองที่นั่งให้คุณทันทีในเซกชันที่กำหนด กรุณาตรวจสอบเวลาเรียนที่ซ้อนทับกันก่อนกดยืนยัน
          </Text>
        </View>

        <TouchableOpacity style={styles.confirmButton}>
          <MaterialIcons name="bolt" size={28} color="white" />
          <Text style={styles.confirmButtonText}>ยืนยันลงทะเบียนคลิกเดียว</Text>
        </TouchableOpacity>

        <Text style={styles.footerCredits}>CURATED BY SCHOLASTIC EDITORIAL TEAM</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F7' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FCE8ED', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1f1a1c' },
  scrollContent: { paddingBottom: 40 },
  studentInfo: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, gap: 16 },
  profileImageContainer: { position: 'relative' },
  profileImage: { width: 72, height: 72, borderRadius: 36, borderWidth: 2, borderColor: 'white' },
  statusDot: { position: 'absolute', bottom: 4, right: 4, width: 16, height: 16, backgroundColor: '#22c55e', borderRadius: 8, borderWidth: 2, borderColor: 'white' },
  welcomeTextSmall: { fontSize: 11, fontWeight: 'bold', color: '#514345', opacity: 0.6 },
  welcomeTextLarge: { fontSize: 22, fontWeight: '800', color: '#1f1a1c' },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 12 },
  listTitle: { fontSize: 15, fontWeight: 'bold', color: '#1f1a1c' },
  badge: { backgroundColor: '#FCE8ED', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  badgeText: { fontSize: 11, fontWeight: 'bold', color: '#D23669' },
  courseContainer: { paddingHorizontal: 24, gap: 12 },
  courseCard: { backgroundColor: 'white', padding: 16, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(210, 54, 105, 0.08)' },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 },
  courseId: { fontSize: 13, fontWeight: 'bold', color: '#D23669', letterSpacing: 0.5 },
  seatBadge: { backgroundColor: '#F3EDED', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  seatText: { fontSize: 11, fontWeight: 'bold', color: '#8E8284' },
  courseTitle: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 8 },
  scheduleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  scheduleText: { fontSize: 11, color: '#514345' },
  infoBanner: { flexDirection: 'row', backgroundColor: '#FCE8ED', padding: 16, marginHorizontal: 24, marginTop: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(210, 54, 105, 0.05)', gap: 12, alignItems: 'flex-start' },
  infoText: { flex: 1, fontSize: 11, fontWeight: '500', color: '#514345', lineHeight: 18 },
  confirmButton: { backgroundColor: '#D23669', flexDirection: 'row', paddingVertical: 20, marginHorizontal: 24, marginTop: 32, borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 8, shadowColor: '#D23669', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 },
  confirmButtonText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  footerCredits: { textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: 'rgba(81, 67, 69, 0.4)', marginTop: 24, letterSpacing: 2 },
});