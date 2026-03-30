import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function GroupSyncScreen({ navigation }) {
  // ข้อมูลวิชาที่ซิงค์กับเพื่อน
  const syncCourses = [
    { id: 'CPE407', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', sec: 'SEC 1', credits: '3 Credits', time: 'M 09:00-12:00 (Theory/Lab)', matchText: '5/5 Match', isMatch: true },
    { id: 'CPE495', title: 'หัวข้อพิเศษในด้านวิศวกรรมคอมพิวเตอร์ I (Sec 001)', sec: 'SEC 1', credits: '3 Credits', time: 'T 13:00-16:00 (Theory)', matchText: 'Synced', isMatch: false },
    { id: 'CPE451', title: 'โปรแกรมประยุกต์ (Sec 002)', sec: 'SEC 2', credits: '3 Credits', time: 'W 09:00-12:00 (Theory/Lab)', matchText: '4/5 Sync', isMatch: true },
    { id: 'CPE408', title: 'เครือข่ายสื่อสารคอมพิวเตอร์ (Sec 001)', sec: 'SEC 1', credits: '3 Credits', time: 'Th 13:00-16:00 (Theory/Lab)', matchText: 'Synced', isMatch: false },
  ];

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Top AppBar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="#a73355" />
            </TouchableOpacity>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>พชรพล</Text>
              <Text style={styles.profileMajor}>Computer Engineering (CPE)</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons name="menu" size={28} color="#7b5455" />
          </TouchableOpacity>
        </View>

        {/* Main Content Area */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Group Section */}
          <View style={styles.groupSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>เพื่อนช่วยลง</Text>
              <Text style={styles.memberCount}>5 Members Syncing</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.avatarScroll}>
              {/* My Profile */}
              <View style={styles.avatarContainer}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.avatarActive} />
                <View style={styles.activeDot} />
              </View>
              
              {/* Friends Profiles */}
              {[1, 2, 3].map((_, idx) => (
                <View key={idx} style={styles.avatarContainer}>
                  <Image source={{ uri: `https://cdn-icons-png.flaticon.com/512/168/16872${idx}.png` }} style={styles.avatarDimmed} />
                </View>
              ))}

              {/* Add Friend Button */}
              <TouchableOpacity style={styles.addFriendBtn}
              onPress={() => navigation.navigate('AddFriend')}
              >
                <MaterialIcons name="add" size={24} color="#a73355" />
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Course Sync List */}
          <View style={styles.listSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>รายการวิชาภาคฯ</Text>
              <View style={styles.liveBadge}>
                <MaterialIcons name="sync" size={14} color="#a73355" />
                <Text style={styles.liveBadgeText}>Live Syncing</Text>
              </View>
            </View>

            <View style={styles.courseContainer}>
              {syncCourses.map((course, idx) => (
                <View key={idx} style={[styles.courseCard, course.id === 'CPE495' && styles.cardHighlight]}>
                  <View style={styles.cardContent}>
                    <View style={styles.courseIcon}>
                      <Text style={styles.courseIconText}>CPE</Text>
                    </View>
                    <View style={styles.courseTextContainer}>
                      <Text style={styles.courseIdTitle}>
                        {course.id} <Text style={styles.creditsText}>{course.credits}</Text>
                      </Text>
                      <Text style={styles.courseName}>{course.title}</Text>
                      <Text style={styles.timeText}>{course.time}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>{course.matchText}</Text>
                    <MaterialIcons name="check-circle" size={18} color="#16a34a" />
                  </View>
                </View>
              ))}
            </View>
          </View>

        </ScrollView>

        {/* Main CTA Button (Sticky at bottom before nav) */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.ctaButton}>
            <LinearGradient colors={['#7b5455', '#a73355']} 
            style={styles.ctaGradient}>
              <MaterialIcons name="how-to-reg" size={24} color="white" />
              <Text style={styles.ctaText}>ยืนยันลงทะเบียน</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.ctaSubText}>ALL MEMBERS WILL BE REGISTERED TO SELECTED SECTIONS</Text>
        </View>

        {/* BottomNavBar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#837375" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          {/* Active Nav */}
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="group" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>GROUP SYNC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="shopping-cart" size={24} color="#837375" />
            <Text style={styles.navText}>CART</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="calendar-today" size={24} color="#837375" />
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
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backButton: { padding: 4, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.3)' },
  profileInfo: { justifyContent: 'center' },
  profileName: { fontSize: 16, fontWeight: 'bold', color: '#1f1a1c' },
  profileMajor: { fontSize: 10, fontWeight: 'bold', color: '#514345', textTransform: 'uppercase', letterSpacing: 1 },
  menuButton: { padding: 8, borderRadius: 20 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 160, paddingTop: 16 },
  groupSection: { marginBottom: 24 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '900', color: '#a73355', letterSpacing: -0.5 },
  memberCount: { fontSize: 10, fontWeight: 'bold', color: '#514345', textTransform: 'uppercase', letterSpacing: 1 },
  avatarScroll: { paddingBottom: 8, gap: 12 },
  avatarContainer: { position: 'relative', marginRight: 8 },
  avatarActive: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: '#a73355', backgroundColor: 'white' },
  activeDot: { position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, backgroundColor: '#4ade80', borderRadius: 7, borderWidth: 2, borderColor: '#fff8f8' },
  avatarDimmed: { width: 56, height: 56, borderRadius: 28, opacity: 0.6, backgroundColor: 'rgba(255,255,255,0.5)' },
  addFriendBtn: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: 'rgba(167, 51, 85, 0.3)', borderStyle: 'dashed', backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', alignItems: 'center' },
  listSection: { flex: 1 },
  liveBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(167, 51, 85, 0.15)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, gap: 4 },
  liveBadgeText: { color: '#a73355', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' },
  courseContainer: { gap: 12 },
  courseCard: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)' },
  cardHighlight: { borderLeftWidth: 4, borderLeftColor: '#a73355' },
  cardContent: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  courseIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255, 119, 153, 0.2)', justifyContent: 'center', alignItems: 'center' },
  courseIconText: { fontSize: 10, fontWeight: '900', color: '#a73355' },
  courseTextContainer: { flex: 1 },
  courseIdTitle: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c' },
  creditsText: { fontSize: 10, fontWeight: 'normal', color: '#514345', opacity: 0.7 },
  courseName: { fontSize: 10, fontWeight: '500', color: '#514345', marginTop: 2 },
  timeText: { fontSize: 9, fontWeight: 'bold', color: '#a73355', marginTop: 4 },
  statusContainer: { alignItems: 'flex-end', gap: 4 },
  statusText: { fontSize: 9, fontWeight: 'bold', color: '#15803d', textTransform: 'uppercase' },
  ctaContainer: { position: 'absolute', bottom: 90, left: 24, right: 24 },
  ctaButton: { borderRadius: 16, overflow: 'hidden', shadowColor: '#a73355', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 8 },
  ctaGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, gap: 12 },
  ctaText: { color: 'white', fontSize: 18, fontWeight: '800', letterSpacing: 0.5 },
  ctaSubText: { textAlign: 'center', fontSize: 9, fontWeight: '800', color: '#1f1a1c', opacity: 0.6, marginTop: 12, letterSpacing: 1 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.85)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 32, borderTopRightRadius: 32 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: 'rgba(167, 51, 85, 0.1)', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24, transform: [{ translateY: -4 }] },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});