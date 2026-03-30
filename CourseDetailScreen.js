import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CourseDetailScreen({ navigation }) {
  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#7b5455" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>เลือกรายวิชา</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.courseGroup}>
            <View style={styles.courseHeader}>
              <View>
                <Text style={styles.courseTitle}>CPE407 <Text style={styles.courseTitleNormal}>เครือข่ายสื่อสารคอมพิวเตอร์</Text></Text>
                <Text style={styles.courseCredit}>(3 หน่วยกิต)</Text>
              </View>
            </View>

            <View style={styles.glassCard}>
              <View style={styles.cardTop}>
                <Text style={styles.secTitle}>Sec 001</Text>
                <View style={styles.statusBadgeAvailable}>
                  <View style={styles.dotAvailable} />
                  <Text style={styles.statusText}>ว่าง 12 ที่นั่ง</Text>
                </View>
              </View>
              
              <View style={styles.timeInfoGroup}>
                <View style={styles.timeRow}>
                  <MaterialIcons name="calendar-today" size={14} color="#a73355" />
                  <Text style={styles.timeText}>จ. 09:00 - 10:40 (Theory)</Text>
                </View>
                <View style={styles.timeRow}>
                  <MaterialIcons name="biotech" size={14} color="#a73355" />
                  <Text style={styles.timeText}>Mon 13:00 - 15:30 (Practice)</Text>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => navigation.navigate('Cart')}
              >
                <Text style={styles.actionButtonText}>เลือก Sec นี้</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.glassCard, styles.cardBorderLeft]}>
              <View style={styles.cardTop}>
                <Text style={styles.secTitle}>Sec 002</Text>
                <View style={styles.statusBadgeAvailable}>
                  <View style={styles.dotAvailable} />
                  <Text style={styles.statusText}>ว่าง 5 ที่นั่ง</Text>
                </View>
              </View>
              
              <View style={styles.timeInfoGroup}>
                <View style={styles.timeRow}>
                  <MaterialIcons name="person" size={14} color="#a73355" />
                  <Text style={styles.timeText}>Dr. Somchai P.</Text>
                </View>
                <View style={styles.timeRow}>
                  <MaterialIcons name="schedule" size={14} color="#a73355" />
                  <Text style={styles.timeText}>Tue 08:30 - 11:30 (Theory)</Text>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => navigation.navigate('Conflict')}
              >
                <Text style={styles.actionButtonText}>เลือก Sec นี้ (จำลองเวลาชน)</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.courseGroup, { marginTop: 24 }]}>
            <View style={styles.courseHeader}>
              <View>
                <Text style={[styles.courseTitle, { opacity: 0.8 }]}>CPE455 <Text style={styles.courseTitleNormal}>Cloud Computing</Text></Text>
                <Text style={styles.courseCredit}>(3 หน่วยกิต)</Text>
              </View>
            </View>

            <View style={[styles.glassCard, styles.cardFull]}>
              <View style={styles.cardTop}>
                <Text style={[styles.secTitle, { color: '#514345' }]}>Sec 001</Text>
                <View style={styles.statusBadgeFull}>
                  <View style={styles.dotFull} />
                  <Text style={styles.statusTextFull}>เต็มแล้ว</Text>
                </View>
              </View>
              
              <View style={styles.timeInfoGroup}>
                <View style={styles.timeRow}>
                  <MaterialIcons name="cloud" size={14} color="#837375" />
                  <Text style={[styles.timeText, { color: '#837375' }]}>Wed 13:00 - 16:00 (Theory)</Text>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.waitlistButton}
                onPress={() => navigation.navigate('Waitlist')}
              >
                <Text style={styles.waitlistButtonText}>ต่อคิว (Waitlist)</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#514345" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItemActive} onPress={() => navigation.navigate('SearchCourse')}>
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
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, backgroundColor: 'rgba(251, 241, 243, 0.8)', zIndex: 10 },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1f1a1c' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 120, paddingTop: 20 },
  courseGroup: { marginBottom: 16 },
  courseHeader: { marginBottom: 16 },
  courseTitle: { fontSize: 18, fontWeight: '900', color: '#1f1a1c' },
  courseTitleNormal: { fontWeight: 'bold' },
  courseCredit: { fontSize: 12, fontWeight: 'bold', color: '#a73355', marginTop: 4, letterSpacing: 0.5 },
  glassCard: { backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)', marginBottom: 16 },
  cardBorderLeft: { borderLeftWidth: 4, borderLeftColor: 'rgba(167, 51, 85, 0.3)' },
  cardFull: { opacity: 0.8 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  secTitle: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c' },
  statusBadgeAvailable: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)' },
  statusBadgeFull: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(255, 218, 214, 0.5)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  dotAvailable: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#facc15' },
  dotFull: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ba1a1a' },
  statusText: { fontSize: 11, fontWeight: 'bold', color: '#514345' },
  statusTextFull: { fontSize: 11, fontWeight: 'bold', color: '#ba1a1a' },
  timeInfoGroup: { gap: 8, marginBottom: 20 },
  timeRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  timeText: { fontSize: 12, fontWeight: '500', color: '#514345' },
  actionButton: { backgroundColor: '#D23669', paddingVertical: 14, borderRadius: 24, alignItems: 'center', shadowColor: '#D23669', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  actionButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  waitlistButton: { backgroundColor: '#eae0e2', paddingVertical: 14, borderRadius: 24, alignItems: 'center' },
  waitlistButtonText: { color: '#514345', fontSize: 14, fontWeight: 'bold' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});