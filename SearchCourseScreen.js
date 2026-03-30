import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchCourseScreen({ navigation }) {
  const courses = [
    { id: 'CPE407', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', credits: '3 Credits', sec: 'Sec 001', time1: 'Mon 09:00 - 10:40 (Theory)', time2: 'Mon 13:00 - 15:30 (Practice)', seats: 'ว่าง 12 ที่นั่ง', isFull: false },
    { id: 'CPE451', title: 'โปรแกรมประยุกต์', credits: '3 Credits', sec: 'Sec 002', time1: 'Tue 08:30 - 11:30 (Theory)', time2: 'Instructor: Dr. Somchai P.', seats: 'ว่าง 5 ที่นั่ง', isFull: false },
    { id: 'CPE455', title: 'Cloud Computing', credits: '3 Credits', sec: '', time1: '', time2: '', seats: 'เต็มแล้ว', isFull: true },
  ];

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuButton}>
            <MaterialIcons name="menu" size={28} color="#a73355" />
          </TouchableOpacity>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
              <MaterialIcons name="search" size={20} color="#837375" style={styles.searchIcon} />
              <TextInput style={styles.searchInput} placeholder="ค้นหาบทเรียน" placeholderTextColor="rgba(131, 115, 117, 0.6)" />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterTabs}>
              <TouchableOpacity style={styles.tabActive}>
                <Text style={styles.tabTextActive}>ทั้งหมด</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabInactive}>
                <Text style={styles.tabTextInactive}>วิชาแกน</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabInactive}>
                <Text style={styles.tabTextInactive}>วิชาเลือก</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabInactive}>
                <Text style={styles.tabTextInactive}>วิชาโท</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.cardsContainer}>
            {courses.map((course, idx) => (
              <View key={idx} style={[styles.courseCard, course.isFull && styles.cardFull]}>
                <View style={styles.cardHeader}>
                  <View style={styles.titleArea}>
                    <Text style={styles.courseId}>{course.id}</Text>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                  </View>
                  <View style={styles.creditBadge}>
                    <Text style={styles.creditText}>{course.credits}</Text>
                  </View>
                </View>
                {!course.isFull && (
                  <View style={styles.scheduleInfo}>
                    <View style={styles.infoRow}>
                      <MaterialIcons name="event-note" size={14} color="#514345" />
                      <Text style={styles.infoText}>{course.sec} {course.time1}</Text>
                    </View>
                    <View style={styles.infoRow}>
                      <MaterialIcons name={idx === 0 ? "biotech" : "person"} size={14} color="#514345" />
                      <Text style={styles.infoText}>{course.time2}</Text>
                    </View>
                  </View>
                )}
                <View style={styles.cardFooter}>
                  <View style={styles.seatInfo}>
                    <View style={[styles.statusDot, course.isFull ? { backgroundColor: '#f87171' } : { backgroundColor: '#facc15' }]} />
                    <Text style={styles.seatText}>{course.seats}</Text>
                  </View>
                  <TouchableOpacity 
                    style={[styles.selectButton, course.isFull ? styles.btnDisabled : styles.btnActive]}
                    disabled={course.isFull}
                    onPress={() => {
                      if (course.id === 'CPE407') {
                        navigation.navigate('CourseDetail');
                      }
                    }}
                  >
                    <Text style={[styles.selectBtnText, course.isFull && { color: 'rgba(81, 67, 69, 0.4)' }]}>เลือกวิชานี้</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#514345" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="search" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name="shopping-cart" size={24} color="#514345" />
            <Text style={styles.navText}>CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MySchedule')}>
            <MaterialIcons name="calendar-today" size={24} color="#514345" />
            <Text style={styles.navText}>SCHEDULE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, backgroundColor: 'rgba(255, 248, 248, 0.6)', zIndex: 10 },
  menuButton: { padding: 4, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.3)' },
  profileImageContainer: { width: 36, height: 36, borderRadius: 18, overflow: 'hidden', borderWidth: 2, borderColor: 'rgba(167, 51, 85, 0.2)' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100, paddingTop: 16 },
  searchSection: { marginBottom: 20 },
  searchInputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fbf1f3', borderRadius: 16, paddingHorizontal: 16, height: 52, marginBottom: 16 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#1f1a1c' },
  filterTabs: { gap: 8, paddingBottom: 4 },
  tabActive: { backgroundColor: '#a73355', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 24, marginRight: 8 },
  tabTextActive: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  tabInactive: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 24, marginRight: 8 },
  tabTextInactive: { color: '#514345', fontSize: 12, fontWeight: 'bold' },
  cardsContainer: { gap: 16 },
  courseCard: { backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)' },
  cardFull: { opacity: 0.8 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  titleArea: { flex: 1, paddingRight: 16 },
  courseId: { fontSize: 10, fontWeight: '900', color: '#a73355', letterSpacing: 1, marginBottom: 2 },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#D23669' },
  creditBadge: { backgroundColor: '#ffd9df', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  creditText: { fontSize: 10, fontWeight: 'bold', color: '#87193e' },
  scheduleInfo: { gap: 6, marginBottom: 16 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  infoText: { fontSize: 11, color: '#514345' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  seatInfo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  seatText: { fontSize: 11, fontWeight: 'bold', color: 'rgba(31, 26, 28, 0.8)' },
  selectButton: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 24 },
  btnActive: { backgroundColor: '#a73355', shadowColor: '#a73355', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  btnDisabled: { backgroundColor: '#eae0e2' },
  selectBtnText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});