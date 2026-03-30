import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function WaitlistScreen({ navigation }) {
  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#d23669" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ต่อคิว</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.courseHeader}>
            <Text style={styles.courseCodeSub}>CPE455 • 3 หน่วยกิต</Text>
            <Text style={styles.courseTitleMain}>Cloud Computing</Text>
          </View>

          <View style={styles.waitlistCard}>
            <View style={styles.cardBgDeco} />
            
            <View style={styles.cardHeaderTop}>
              <View style={styles.waitlistBadgeRow}>
                <MaterialIcons name="hourglass-empty" size={16} color="#a73355" />
                <Text style={styles.waitlistBadgeText}>ต่อคิว</Text>
              </View>
              <Text style={styles.waitlistDesc}>
                คิวสำหรับวิชาที่เต็ม หากมีคนถอนวิชาออก ระบบจะดึงเข้าทันที
              </Text>
            </View>

            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>อาจารย์ผู้สอน</Text>
                <Text style={styles.gridValue}>นิมิตร</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>กลุ่มเรียน (Section)</Text>
                <Text style={styles.gridValue}>Sec 001</Text>
              </View>
              <View style={[styles.gridItem, styles.gridColSpan2]}>
                <Text style={styles.gridLabel}>วันและเวลาเรียน</Text>
                <View style={styles.timeRow}>
                  <MaterialIcons name="calendar-today" size={12} color="#a73355" />
                  <Text style={styles.gridValue}>Wed. 13:00 - 16:00</Text>
                </View>
              </View>
            </View>

            <View style={styles.statusBadgesWrapper}>
              <View style={styles.statusRowWhite}>
                <Text style={styles.statusRowLabel}>สถานะปัจจุบัน</Text>
                <Text style={styles.statusRowValueHigh}>เหลือ 5 ลำดับ</Text>
              </View>
              <View style={styles.statusRowGray}>
                <Text style={styles.statusRowLabel}>จำนวนที่นั่งว่าง</Text>
                <Text style={styles.statusRowValueNormal}>เต็ม 0 ที่นั่ง</Text>
              </View>
            </View>
          </View>

          <View style={styles.imageDecoContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop' }} 
              style={styles.decoImage} 
            />
            <LinearGradient colors={['rgba(123, 84, 85, 0.6)', 'transparent']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.imageOverlay}>
              <Text style={styles.imageText}>Empowering Digital Scholars</Text>
            </LinearGradient>
          </View>

        </ScrollView>

        <View style={styles.footerActionContainer}>
          <TouchableOpacity style={styles.confirmButton}>
            <LinearGradient colors={['#7b5455', '#a73355']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.btnGradient}>
              <Text style={styles.confirmBtnText}>ยืนยันการต่อคิว</Text>
              <MaterialIcons name="ads-click" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#514345" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItemActive} onPress={() => navigation.navigate('SearchCourse')}>
            <MaterialIcons name="search" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
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
  backButton: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.4)' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#d23669' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 220, paddingTop: 20 },
  courseHeader: { marginBottom: 24 },
  courseCodeSub: { fontSize: 11, fontWeight: 'bold', color: '#a73355', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  courseTitleMain: { fontSize: 24, fontWeight: '900', color: '#1f1a1c' },
  waitlistCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)', marginBottom: 24, overflow: 'hidden', position: 'relative' },
  cardBgDeco: { position: 'absolute', top: -30, right: -30, width: 100, height: 100, backgroundColor: '#ff7799', opacity: 0.05, borderBottomLeftRadius: 100 },
  cardHeaderTop: { marginBottom: 20 },
  waitlistBadgeRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  waitlistBadgeText: { fontSize: 12, fontWeight: 'bold', color: '#a73355', textTransform: 'uppercase', letterSpacing: 0.5 },
  waitlistDesc: { fontSize: 13, color: '#514345', lineHeight: 22 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 },
  gridItem: { flex: 1, minWidth: '45%', backgroundColor: '#fbf1f3', padding: 12, borderRadius: 12 },
  gridColSpan2: { minWidth: '100%' },
  gridLabel: { fontSize: 10, fontWeight: 'bold', color: '#837375', textTransform: 'uppercase', marginBottom: 4 },
  gridValue: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c' },
  timeRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statusBadgesWrapper: { gap: 8 },
  statusRowWhite: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.8)', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)' },
  statusRowGray: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(234, 224, 226, 0.4)', padding: 12, borderRadius: 12 },
  statusRowLabel: { fontSize: 12, color: '#514345' },
  statusRowValueHigh: { fontSize: 14, fontWeight: '900', color: '#d23669' },
  statusRowValueNormal: { fontSize: 14, fontWeight: 'bold', color: '#514345' },
  imageDecoContainer: { height: 100, borderRadius: 12, overflow: 'hidden', position: 'relative' },
  decoImage: { width: '100%', height: '100%', opacity: 0.8 },
  imageOverlay: { position: 'absolute', inset: 0, justifyContent: 'center', paddingHorizontal: 24 },
  imageText: { color: 'white', fontSize: 12, fontWeight: '600', fontStyle: 'italic' },
  footerActionContainer: { position: 'absolute', bottom: 100, left: 24, right: 24, zIndex: 20 },
  confirmButton: { borderRadius: 32, overflow: 'hidden', shadowColor: '#a73355', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, elevation: 8 },
  btnGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 18, gap: 12 },
  confirmBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});