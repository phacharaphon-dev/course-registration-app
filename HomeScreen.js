import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top AppBar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {/* ปุ่มย้อนกลับ */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')} 
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back" size={24} color="#7b5455" />
            </TouchableOpacity>
            
            {/* โลโก้และชื่อแอป */}
            <MaterialIcons name="menu-book" size={24} color="#7b5455" />
            <Text style={styles.headerTitle}>Scholastic Curator</Text>
          </View>

          {/* ปุ่มกระดิ่งแจ้งเตือน */}
          <TouchableOpacity style={styles.bellButton}>
            <MaterialIcons name="notifications" size={22} color="#7b5455" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Student Profile Header */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            {/* ใช้รูปจำลองไปก่อน ถ้ามีรูปจริงค่อยเปลี่ยน URL ครับ */}
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
              style={styles.profileImage} 
            />
            <View style={styles.statusDot} />
          </View>
          <View>
            <Text style={styles.welcomeText}>สวัสดี พชรพล</Text>
            <Text style={styles.majorText}>วิศวกรรมคอมพิวเตอร์ ปี 3</Text>
          </View>
        </View>

        {/* Feature Card 1: Recommend */}
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <View style={styles.iconBoxMain}>
              <MaterialIcons name="auto-awesome" size={20} color="#a73355" />
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>RECOMMEND</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>ลงทะเบียนวิชาภาคฯ ยกชุด</Text>
          <Text style={styles.cardDesc}>คัดสรรวิชาตามแผนการเรียนของคุณ พร้อมสิทธิพิเศษในการเลือกเซกชันก่อนใคร</Text>
          
          <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Registration')}
          >
            <LinearGradient colors={['#7b5455', '#a73355']} style={styles.btnGradient}>
              <Text style={styles.btnText}>ยืนยันลงทะเบียนคลิกเดียว</Text>
              <MaterialIcons name="arrow-forward" size={16} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Two Sub Cards Row */}
        <View style={styles.gridRow}>
          {/* Card 2 */}
          <View style={styles.subCard}>
            <View style={styles.iconBoxSub}>
              <MaterialIcons name="event-note" size={20} color="#a73355" />
            </View>
            <Text style={styles.subCardTitle}>ตารางเรียนอัตโนมัติ</Text>
            <Text style={styles.subCardDesc}>จัด 2-5 แผนการเรียนที่คุณเลือกได้ตามใจ</Text>
            <TouchableOpacity 
            style={styles.textBtn}
            onPress={() => navigation.navigate('Schedule')}
            >
              <Text style={styles.textBtnText}>เริ่มสร้าง</Text>
              <MaterialIcons name="chevron-right" size={16} color="#a73355" />
            </TouchableOpacity>
          </View>

          {/* Card 3 */}
          <View style={styles.subCard}>
            <View style={styles.iconBoxSub}>
              <MaterialIcons name="group" size={20} color="#a73355" />
            </View>
            <Text style={styles.subCardTitle}>เพื่อนช่วยลง</Text>
            <Text style={styles.subCardDesc}>ซิงค์ตารางเรียนกับเพื่อนสูงสุด 5 คนแบบเรียลไทม์ 
            </Text>
            <TouchableOpacity style={styles.textBtn}
            onPress={() => navigation.navigate('GroupSync')}
            >
              <Text style={styles.textBtnText}>รวมกลุ่ม</Text>
              <MaterialIcons name="chevron-right" size={16} color="#a73355" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <MaterialIcons name="home" size={24} color="#a73355" />
          <Text style={styles.navTextActive}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}
        onPress={() => navigation.navigate('SearchCourse')}
        >
          <MaterialIcons name="search" size={24} color="#837375" />
          <Text style={styles.navText}>SEARCH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}
        onPress={() => navigation.navigate('Cart')}
        >
          <MaterialIcons name="shopping-cart" size={24} color="#837375" />
          <Text style={styles.navText}>CART</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('MySchedule')}
        >
          <MaterialIcons name="calendar-today" size={24} color="#837375" />
          <Text style={styles.navText}>SCHEDULE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8f8' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: 'rgba(255, 248, 248, 0.9)', zIndex: 10 },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  topBarTitle: { fontSize: 20, fontWeight: '800', color: '#7b5455' },
  notificationBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#f5ebed', justifyContent: 'center', alignItems: 'center' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 100, paddingTop: 10 },
  profileSection: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 24 },
  profileImageContainer: { position: 'relative' },
  profileImage: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: 'rgba(167,51,85,0.2)' },
  statusDot: { position: 'absolute', bottom: 0, right: 0, width: 16, height: 16, backgroundColor: '#22c55e', borderRadius: 8, borderWidth: 2, borderColor: 'white' },
  welcomeText: { fontSize: 24, fontWeight: '800', color: '#1f1a1c' },
  majorText: { fontSize: 14, fontWeight: '500', color: '#514345' },
  mainCard: { backgroundColor: 'rgba(255, 248, 248, 0.8)', padding: 24, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)', marginBottom: 16 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  iconBoxMain: { backgroundColor: 'rgba(240, 190, 190, 0.4)', padding: 8, borderRadius: 8 },
  badge: { backgroundColor: '#a73355', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 10, fontWeight: 'bold', color: 'white', letterSpacing: 1 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#514345', marginBottom: 16, lineHeight: 22 },
  actionBtn: { borderRadius: 12, overflow: 'hidden' },
  btnGradient: { flexDirection: 'row', paddingVertical: 14, justifyContent: 'center', alignItems: 'center', gap: 8 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between' },
  subCard: { width: '48%', backgroundColor: 'rgba(255, 248, 248, 0.8)', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)' },
  iconBoxSub: { width: 40, height: 40, backgroundColor: '#f5ebed', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  subCardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 4 },
  subCardDesc: { fontSize: 11, color: '#514345', marginBottom: 16 },
  textBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  textBtnText: { color: '#a73355', fontSize: 12, fontWeight: 'bold' },
  bottomNav: { position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(255, 248, 248, 0.95)', paddingBottom: 24, paddingTop: 16, borderTopLeftRadius: 32, borderTopRightRadius: 32 },
  navItemActive: { alignItems: 'center', backgroundColor: '#f5ebed', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  navTextActive: { fontSize: 10, fontWeight: 'bold', color: '#a73355', marginTop: 4 },
  navItem: { alignItems: 'center', paddingHorizontal: 20, paddingVertical: 8 },
  navText: { fontSize: 10, fontWeight: 'bold', color: '#837375', marginTop: 4 },
  // --- สไตล์ส่วน Top App Bar ---
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16, zIndex: 10 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  backButton: { padding: 4, marginLeft: -4 }, // ขยับไปซ้ายนิดนึงจะได้ไม่กินพื้นที่โลโก้
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#7b5455', letterSpacing: -0.5 },
  bellButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#f5ebed', justifyContent: 'center', alignItems: 'center', position: 'relative' },
  notificationDot: { position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: '#a73355', borderWidth: 1.5, borderColor: '#f5ebed' },
});