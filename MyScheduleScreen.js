import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyScheduleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Top AppBar */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuButton}>
            <MaterialIcons name="menu" size={28} color="#7b5455" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ตารางเรียน</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.profileSection}>
          <Text style={styles.welcomeText}>สวัสดี พชรพล</Text>
          <Text style={styles.majorText}>ภาควิชาวิศวกรรมคอมพิวเตอร์</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 119, 153, 0.2)' }]}>
              <MaterialIcons name="auto-stories" size={24} color="#a73355" />
            </View>
            <View>
              <Text style={styles.statLabel}>รายวิชา</Text>
              <Text style={styles.statValue}>6 วิชา</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 182, 207, 0.2)' }]}>
              <MaterialIcons name="workspace-premium" size={24} color="#a82d68" />
            </View>
            <View>
              <Text style={styles.statLabel}>หน่วยกิต</Text>
              <Text style={styles.statValue}>18 หน่วย</Text>
            </View>
          </View>
        </View>

        {/* Weekly Schedule Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ตารางสอนรายสัปดาห์</Text>
        </View>
        
        <View style={styles.scheduleGrid}>
          {/* Time Column */}
          <View style={styles.timeColumn}>
            <Text style={styles.timeText}>09:00</Text>
            <Text style={styles.timeText}>11:00</Text>
            <Text style={styles.timeText}>13:00</Text>
            <Text style={styles.timeText}>15:00</Text>
          </View>

          {/* Days Grid */}
          <View style={styles.daysContainer}>
            {/* Monday */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>จ.</Text>
              <View style={[styles.timeSlot, { height: 60, backgroundColor: 'rgba(240, 190, 190, 0.4)' }]}>
                <Text style={styles.slotText}>CPE407</Text>
              </View>
              <View style={{ height: 80 }} />
            </View>
            
            {/* Tuesday */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>อ.</Text>
              <View style={{ height: 40 }} />
              <View style={[styles.timeSlot, { height: 80, backgroundColor: 'rgba(255, 119, 153, 0.2)' }]}>
                <Text style={styles.slotText}>CPE495</Text>
              </View>
            </View>

            {/* Wednesday */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>พ.</Text>
              <View style={[styles.timeSlot, { height: 60, backgroundColor: 'rgba(255, 182, 207, 0.4)' }]}>
                <Text style={styles.slotText}>CPE322</Text>
              </View>
            </View>

            {/* Thursday */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>พฤ.</Text>
              <View style={{ height: 80 }} />
              <View style={[styles.timeSlot, { height: 60, backgroundColor: 'rgba(240, 190, 190, 0.4)' }]}>
                <Text style={styles.slotText}>CPE407</Text>
              </View>
            </View>

            {/* Friday */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>ศ.</Text>
              <View style={[styles.timeSlot, { height: 60, backgroundColor: 'rgba(255, 119, 153, 0.2)' }]}>
                <Text style={styles.slotText}>GEN211</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Course List */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>รายวิชาที่ลงทะเบียน</Text>
        </View>

        {/* List Item 1 */}
        <View style={styles.courseItem}>
          <View style={styles.courseIconWrap}>
            <MaterialIcons name="hub" size={24} color="#a73355" />
          </View>
          <View style={styles.courseDetail}>
            <Text style={styles.courseTag}>CPE407</Text>
            <Text style={styles.courseName}>เครือข่ายสื่อสารคอมพิวเตอร์</Text>
            <Text style={styles.courseSub}>3 หน่วยกิต • บรรยาย</Text>
          </View>
        </View>

        {/* List Item 2 */}
        <View style={styles.courseItem}>
          <View style={styles.courseIconWrap}>
            <MaterialIcons name="terminal" size={24} color="#7b5455" />
          </View>
          <View style={[styles.courseDetail, { borderLeftColor: 'rgba(236, 186, 186, 0.3)' }]}>
            <Text style={[styles.courseTag, { color: '#7b5455' }]}>CPE495</Text>
            <Text style={styles.courseName}>หัวข้อพิเศษวิศวกรรมคอมพิวเตอร์</Text>
            <Text style={styles.courseSub}>3 หน่วยกิต • สัมมนา</Text>
          </View>
        </View>

        {/* List Item 3 */}
        <View style={styles.courseItem}>
          <View style={styles.courseIconWrap}>
            <MaterialIcons name="dns" size={24} color="#a82d68" />
          </View>
          <View style={[styles.courseDetail, { borderLeftColor: 'rgba(255, 182, 207, 0.3)' }]}>
            <Text style={[styles.courseTag, { color: '#a82d68' }]}>CPE322</Text>
            <Text style={styles.courseName}>Database Systems</Text>
            <Text style={styles.courseSub}>3 หน่วยกิต • บรรยาย</Text>
          </View>
        </View>

      </ScrollView>

      {/* BottomNavBar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={24} color="#514345" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="search" size={24} color="#514345" />
          <Text style={styles.navText}>SEARCH</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="shopping-cart" size={24} color="#514345" />
          <Text style={styles.navText}>CART</Text>
        </TouchableOpacity>
        
        {/* Active Nav (Schedule) */}
        <TouchableOpacity style={styles.navItemActive}>
          <MaterialIcons name="calendar-today" size={24} color="#D23669" />
          <Text style={styles.navTextActive}>SCHEDULE</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8f8' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuButton: { padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#7b5455', letterSpacing: -0.5 },
  profileImageContainer: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'rgba(255, 119, 153, 0.3)' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 120, paddingTop: 16 },
  profileSection: { marginBottom: 20 },
  welcomeText: { fontSize: 24, fontWeight: '800', color: '#D23669', marginBottom: 4 },
  majorText: { fontSize: 12, fontWeight: 'bold', color: '#514345', opacity: 0.8, textTransform: 'uppercase', letterSpacing: 1 },
  statsContainer: { flexDirection: 'row', gap: 16, marginBottom: 32 },
  statCard: { flex: 1, backgroundColor: '#fbf1f3', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBox: { padding: 8, borderRadius: 12 },
  statLabel: { fontSize: 10, fontWeight: 'bold', color: '#514345', opacity: 0.7, textTransform: 'uppercase', letterSpacing: 1 },
  statValue: { fontSize: 16, fontWeight: '800', color: '#D23669' },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: '#514345', textTransform: 'uppercase', letterSpacing: 2 },
  scheduleGrid: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)', flexDirection: 'row', gap: 12, marginBottom: 32 },
  timeColumn: { justifyContent: 'space-between', paddingVertical: 32, gap: 40 },
  timeText: { fontSize: 10, fontWeight: 'bold', color: '#837375' },
  daysContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  dayCol: { flex: 1, alignItems: 'center', gap: 8 },
  dayText: { fontSize: 11, fontWeight: '900', color: '#514345', marginBottom: 4 },
  timeSlot: { width: '100%', borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 4 },
  slotText: { fontSize: 9, fontWeight: 'bold', color: '#D23669' },
  courseItem: { flexDirection: 'row', gap: 20, marginBottom: 32 },
  courseIconWrap: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#f5ebed', justifyContent: 'center', alignItems: 'center' },
  courseDetail: { flex: 1, borderLeftWidth: 2, borderLeftColor: 'rgba(255, 119, 153, 0.3)', paddingLeft: 16, justifyContent: 'center' },
  courseTag: { fontSize: 10, fontWeight: '900', color: '#a73355', letterSpacing: 1 },
  courseName: { fontSize: 16, fontWeight: 'bold', color: '#D23669', marginVertical: 4 },
  courseSub: { fontSize: 12, color: '#514345', opacity: 0.7 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fef9f9', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.05)' },
  navItem: { flex: 1, alignItems: 'center', paddingVertical: 8 },
  navText: { color: '#514345', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { flex: 1, alignItems: 'center', backgroundColor: '#fbe9ef', paddingVertical: 12, borderRadius: 24 },
  navTextActive: { color: '#D23669', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});