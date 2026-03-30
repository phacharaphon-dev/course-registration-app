import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ScheduleScreen({ navigation }) {
  // ข้อมูลวิชาจำลอง
  const courses = [
    { id: 'CPE407', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', credit: '3 หน่วยกิต' },
    { id: 'CPE495', title: 'หัวข้อพิเศษวิศวกรรมคอมพิวเตอร์', credit: '3 หน่วยกิต' },
    { id: 'CPE451', title: 'โปรแกรมประยุกต์', credit: '3 หน่วยกิต' },
    { id: 'CPE408', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', credit: '3 หน่วยกิต' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scholar Central</Text>
        <TouchableOpacity style={styles.notificationBtn}>
          <MaterialIcons name="notifications" size={28} color="#4A1D2C" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Student Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
          </View>
          <Text style={styles.welcomeTextSmall}>สวัสดี พชรพล</Text>
          <Text style={styles.majorText}>วิศวกรรมคอมพิวเตอร์ ปี 3</Text>
        </View>

        {/* Main Interactive Card Area */}
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>สร้างตารางเรียนอัตโนมัติ</Text>
            <View style={styles.iconCircle}>
              <MaterialIcons name="auto-awesome" size={18} color="#D13F6B" />
            </View>
          </View>

          {/* Course List */}
          <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
            {courses.map((course, index) => (
              <View key={index} style={styles.courseItem}>
                <View style={styles.courseInfo}>
                  <Text style={styles.courseId}>{course.id}</Text>
                  <Text style={styles.courseName}>{course.title}</Text>
                  <Text style={styles.courseCredit}>({course.credit})</Text>
                </View>
                <TouchableOpacity style={styles.deleteBtn}>
                  <MaterialIcons name="delete" size={20} color="rgba(74, 29, 44, 0.3)" />
                </TouchableOpacity>
              </View>
            ))}

            {/* Add Button */}
            <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddCourse')}
            >
              <MaterialIcons name="add" size={20} color="rgba(74, 29, 44, 0.6)" />
              <Text style={styles.addButtonText}>เพิ่มรายวิชา</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Primary Action Button */}
        <TouchableOpacity 
        style={styles.generateButton}
        onPress={() => navigation.navigate('AutoSchedule')}
        >
          <MaterialIcons name="auto-fix-high" size={24} color="white" />
          <Text style={styles.generateButtonText}>สร้างตารางเรียนอัตโนมัติ</Text>
        </TouchableOpacity>
      </View>

      {/* BottomNavBar */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemsContainer}>
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="home" size={24} color="#D13F6B" />
            <Text style={styles.navTextActive}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="search" size={24} color="rgba(142, 114, 123, 0.6)" />
            <Text style={styles.navText}>SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="shopping-cart" size={24} color="rgba(142, 114, 123, 0.6)" />
            <Text style={styles.navText}>CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="calendar-today" size={24} color="rgba(142, 114, 123, 0.6)" />
            <Text style={styles.navText}>SCHEDULE</Text>
          </TouchableOpacity>
        </View>
        
        {/* Back Arrow Button */}
        <TouchableOpacity 
          style={styles.backCircleBtn}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="rgba(209, 63, 107, 0.7)" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F3' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, zIndex: 10 },
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#4A1D2C', letterSpacing: -0.5 },
  notificationBtn: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center', opacity: 0.8 },
  mainContent: { flex: 1, paddingHorizontal: 24, paddingTop: 16, paddingBottom: 100 },
  profileSection: { marginBottom: 24 },
  profileImageContainer: { width: 64, height: 64, borderRadius: 32, overflow: 'hidden', marginBottom: 12, borderWidth: 2, borderColor: 'white', elevation: 2 },
  profileImage: { width: '100%', height: '100%' },
  welcomeTextSmall: { fontSize: 12, fontWeight: '600', color: '#8E727B', marginBottom: 4 },
  majorText: { fontSize: 18, fontWeight: 'bold', color: '#4A1D2C' },
  cardContainer: { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 40, padding: 20, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.6)', marginBottom: 16 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#4A1D2C' },
  iconCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(209, 63, 107, 0.1)', justifyContent: 'center', alignItems: 'center' },
  courseList: { flex: 1 },
  courseItem: { backgroundColor: 'white', padding: 16, borderRadius: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#FFF0F3' },
  courseInfo: { flex: 1, gap: 2 },
  courseId: { color: '#D13F6B', fontWeight: 'bold', fontSize: 13, letterSpacing: 0.5 },
  courseName: { color: '#4A1D2C', fontSize: 14, fontWeight: 'bold' },
  courseCredit: { color: '#8E727B', fontSize: 11, fontWeight: '500' },
  deleteBtn: { padding: 8 },
  addButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 16, borderRadius: 16, borderWidth: 2, borderColor: 'rgba(209, 63, 107, 0.2)', borderStyle: 'dashed', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginTop: 4, marginBottom: 12, gap: 8 },
  addButtonText: { color: '#4A1D2C', fontWeight: 'bold', fontSize: 14 },
  generateButton: { backgroundColor: '#D13F6B', height: 56, borderRadius: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, shadowColor: '#D13F6B', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5 },
  generateButtonText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, shadowColor: 'black', shadowOffset: { width: 0, height: -10 }, shadowOpacity: 0.04, shadowRadius: 20, elevation: 10 },
  navItemsContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  navItemActive: { alignItems: 'center', backgroundColor: 'rgba(209, 63, 107, 0.1)', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  navTextActive: { color: '#D13F6B', fontSize: 9, fontWeight: 'bold', marginTop: 2, letterSpacing: 1 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navText: { color: 'rgba(142, 114, 123, 0.6)', fontSize: 9, fontWeight: 'bold', marginTop: 2, letterSpacing: 1 },
  backCircleBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(209, 63, 107, 0.05)', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
});