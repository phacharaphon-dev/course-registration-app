import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PlanDetailScreen({ navigation }) {
  // ข้อมูลวิชาในแผนการเรียน
  const planCourses = [
    { id: 'CPE407', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', sec: 'SEC 1', time: 'จ. 09:30 - 12:30', room: 'CB2304', highlight: false },
    { id: 'CPE451', title: 'โปรแกรมประยุกต์', sec: 'SEC 2', time: 'อ. 13:30 - 16:30', room: 'LX1002', highlight: true }, // ใส่ highlight สีชมพูเหมือนในแบบ
    { id: 'LNG220', title: 'Academic English', sec: 'SEC 10', time: 'พฤ. 15:30 - 17:30', room: 'SoLA302', highlight: false },
    { id: 'ICT376', title: 'การประยุกต์ใช้เจนอเรทีฟเอไออย่างมืออาชีพ', sec: 'SEC 3', time: 'ศ. 09:00 - 12:00', room: 'LX2004', highlight: false },
  ];

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Top AppBar */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#a73355" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>รายละเอียดแผนตารางเรียน</Text>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
          </View>
        </View>

        {/* Main Content Area */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>รายวิชาในแผนการเรียน (4)</Text>
            <Text style={styles.totalCredit}>รวม 12 หน่วยกิต</Text>
          </View>

          {/* Course List */}
          <View style={styles.courseList}>
            {planCourses.map((course, index) => (
              <View key={index} style={[styles.courseCard, course.highlight && styles.courseCardHighlight]}>
                <View style={styles.cardTopRow}>
                  <View>
                    <Text style={styles.courseId}>{course.id}</Text>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                  </View>
                  <View style={styles.secBadge}>
                    <Text style={styles.secText}>{course.sec}</Text>
                  </View>
                </View>
                
                <View style={styles.cardBottomRow}>
                  <View style={styles.infoItem}>
                    <MaterialIcons name="schedule" size={14} color="#a73355" />
                    <Text style={styles.infoText}>{course.time}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <MaterialIcons name="location-on" size={14} color="#a73355" />
                    <Text style={styles.infoText}>{course.room}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Bottom Action Button */}
          <TouchableOpacity style={styles.selectPlanButton}>
            <Text style={styles.selectPlanButtonText}>เลือก Plan นี้เป็นตารางหลัก</Text>
          </TouchableOpacity>

        </ScrollView>

        {/* BottomNavBar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#837375" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="search" size={24} color="#837375" />
            <Text style={styles.navText}>SEARCH</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="shopping-cart" size={24} color="#837375" />
            <Text style={styles.navText}>CART</Text>
          </TouchableOpacity>
          
          {/* Active Nav */}
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="calendar-today" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>SCHEDULE</Text>
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
  backButton: { padding: 4, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.3)' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#3F0017' },
  profileImageContainer: { width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', backgroundColor: '#f0bebe' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 120, paddingTop: 8 },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 12, paddingHorizontal: 4 },
  listTitle: { fontSize: 14, fontWeight: 'bold', color: '#3F0017' },
  totalCredit: { fontSize: 10, fontWeight: 'bold', color: '#a73355' },
  courseList: { gap: 12, marginBottom: 24 },
  courseCard: { backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: 'transparent' },
  courseCardHighlight: { borderLeftWidth: 4, borderLeftColor: '#FFB7C5' },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  courseId: { fontSize: 10, fontWeight: 'bold', color: '#a73355', letterSpacing: 1, marginBottom: 2 },
  courseTitle: { fontSize: 14, fontWeight: 'bold', color: '#3F0017' },
  secBadge: { backgroundColor: '#FDEEF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  secText: { color: '#a73355', fontSize: 10, fontWeight: '900' },
  cardBottomRow: { flexDirection: 'row', gap: 16 },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  infoText: { fontSize: 11, fontWeight: '600', color: '#3F0017' },
  selectPlanButton: { width: '100%', height: 56, backgroundColor: '#FDEEF4', borderRadius: 16, borderWidth: 2, borderColor: '#a73355', justifyContent: 'center', alignItems: 'center', shadowColor: '#a73355', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 },
  selectPlanButtonText: { fontSize: 14, fontWeight: 'bold', color: '#3F0017' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.85)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 40, borderTopRightRadius: 40 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});