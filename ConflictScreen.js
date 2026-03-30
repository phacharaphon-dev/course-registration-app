import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConflictScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="#D23669" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>ลงทะเบียนเรียน</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.courseHeader}>
            <Text style={styles.courseCodeSub}>ART101 • 3 หน่วยกิต</Text>
            <Text style={styles.courseTitleMain}>Introduction to Digital Curation</Text>
          </View>

          <View style={styles.glassCard}>
            <View style={styles.cardHeaderTop}>
              <View>
                <Text style={styles.secTitle}>Section 001 • Dr. Arisara K.</Text>
              </View>
              <MaterialIcons name="warning" size={24} color="#ba1a1a" />
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.timeRow}>
                <MaterialIcons name="schedule" size={16} color="#514345" />
                <Text style={styles.timeText}>Mon 09:00 - 12:00</Text>
              </View>
              <View style={styles.fullBadge}>
                <Text style={styles.fullBadgeText}>เต็ม (Full)</Text>
              </View>
            </View>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>CREDITS</Text>
              <Text style={styles.gridValueHigh}>3.0</Text>
            </View>
            <View style={styles.gridItemGray}>
              <Text style={styles.gridLabel}>CATEGORY</Text>
              <Text style={styles.gridValue}>Major Elective</Text>
            </View>
          </View>

        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalDragHandle} />
              
              <Text style={styles.modalTitle}>เวลาเรียนชนกัน หรือ ที่นั่งเต็ม</Text>
              <Text style={styles.modalDesc}>Section ที่คุณเลือกมีการทับซ้อนของเวลาหรือเต็มแล้ว กรุณาเลือก Section อื่นที่ว่าง</Text>

              <TouchableOpacity style={styles.suggestionCard}>
                <View style={styles.suggestionHeader}>
                  <Text style={styles.suggestionTitle}>Section 002</Text>
                  <View style={styles.seatBadge}>
                    <MaterialIcons name="event-seat" size={12} color="#a82d68" />
                    <Text style={styles.seatBadgeText}>เหลือ 12 ที่นั่ง</Text>
                  </View>
                </View>
                <View style={styles.suggestionInfo}>
                  <View style={styles.iconTextRow}>
                    <MaterialIcons name="person" size={14} color="#514345" />
                    <Text style={styles.suggestionText}>อ. วรุตม์ มณีเนตร</Text>
                  </View>
                  <View style={styles.iconTextRow}>
                    <MaterialIcons name="schedule" size={14} color="#514345" />
                    <Text style={styles.suggestionText}>Wed 13:00 - 16:00</Text>
                  </View>
                </View>
                <LinearGradient colors={['#7b5455', '#a73355']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.selectSecButton}>
                  <Text style={styles.selectSecButtonText}>เลือก Sec นี้</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.suggestionCard}>
                <View style={styles.suggestionHeader}>
                  <Text style={styles.suggestionTitle}>Section 003</Text>
                  <View style={styles.seatBadge}>
                    <MaterialIcons name="event-seat" size={12} color="#a82d68" />
                    <Text style={styles.seatBadgeText}>เหลือ 5 ที่นั่ง</Text>
                  </View>
                </View>
                <View style={styles.suggestionInfo}>
                  <View style={styles.iconTextRow}>
                    <MaterialIcons name="person" size={14} color="#514345" />
                    <Text style={styles.suggestionText}>ดร. สุดาพร รัตนพาณิชย์</Text>
                  </View>
                  <View style={styles.iconTextRow}>
                    <MaterialIcons name="schedule" size={14} color="#514345" />
                    <Text style={styles.suggestionText}>Fri 09:00 - 12:00</Text>
                  </View>
                </View>
                <View style={styles.selectSecButtonOutline}>
                  <Text style={styles.selectSecButtonTextOutline}>เลือก Sec นี้</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => {
                  setModalVisible(false);
                  navigation.goBack();
                }}
              >
                <Text style={styles.cancelButtonText}>ยกเลิกและย้อนกลับ</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

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
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.4)' },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#d23669', letterSpacing: -0.5 },
  profileImageContainer: { width: 36, height: 36, borderRadius: 18, overflow: 'hidden', borderWidth: 2, borderColor: 'rgba(167, 51, 85, 0.2)' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 120, paddingTop: 20 },
  courseHeader: { marginBottom: 20 },
  courseCodeSub: { fontSize: 11, fontWeight: 'bold', color: '#a73355', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  courseTitleMain: { fontSize: 22, fontWeight: '900', color: '#1f1a1c', lineHeight: 28 },
  glassCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)', borderLeftWidth: 4, borderLeftColor: '#D23669', marginBottom: 16 },
  cardHeaderTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  secTitle: { fontSize: 14, color: '#514345', fontWeight: '600' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 },
  timeRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  timeText: { fontSize: 12, fontWeight: 'bold', color: '#514345' },
  fullBadge: { backgroundColor: '#ffdad6', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  fullBadgeText: { color: '#93000a', fontSize: 11, fontWeight: 'bold' },
  gridContainer: { flexDirection: 'row', gap: 12 },
  gridItem: { flex: 1, backgroundColor: '#fbf1f3', padding: 16, borderRadius: 12 },
  gridItemGray: { flex: 1, backgroundColor: '#efe6e8', padding: 16, borderRadius: 12 },
  gridLabel: { fontSize: 10, fontWeight: 'bold', color: '#514345', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  gridValueHigh: { fontSize: 20, fontWeight: '900', color: '#7b5455' },
  gridValue: { fontSize: 14, fontWeight: 'bold', color: '#7b5455' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(52, 47, 49, 0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 24, paddingTop: 16, paddingBottom: 40, elevation: 20 },
  modalDragHandle: { width: 40, height: 4, backgroundColor: 'rgba(214, 194, 196, 0.5)', borderRadius: 2, alignSelf: 'center', marginBottom: 24 },
  modalTitle: { fontSize: 20, fontWeight: '900', color: '#D23669', textAlign: 'center', marginBottom: 8 },
  modalDesc: { fontSize: 13, color: '#514345', textAlign: 'center', marginBottom: 24, paddingHorizontal: 16 },
  suggestionCard: { backgroundColor: '#fbf1f3', borderRadius: 16, padding: 16, marginBottom: 12 },
  suggestionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  suggestionTitle: { fontSize: 14, fontWeight: 'bold', color: '#7b5455' },
  seatBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#ffd9e4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  seatBadgeText: { fontSize: 10, fontWeight: 'bold', color: '#a82d68' },
  suggestionInfo: { marginBottom: 16, gap: 4 },
  iconTextRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  suggestionText: { fontSize: 12, color: '#514345' },
  selectSecButton: { borderRadius: 24, overflow: 'hidden', paddingVertical: 12, alignItems: 'center', shadowColor: '#a73355', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  selectSecButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  selectSecButtonOutline: { borderRadius: 24, paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.8)' },
  selectSecButtonTextOutline: { color: '#a73355', fontSize: 14, fontWeight: 'bold' },
  cancelButton: { marginTop: 16, paddingVertical: 12, alignItems: 'center' },
  cancelButtonText: { color: '#514345', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});