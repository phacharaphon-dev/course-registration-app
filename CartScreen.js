import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CartScreen({ navigation }) {
  // ข้อมูลวิชาในตะกร้า
  const cartItems = [
    { id: 'CPE407', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', credits: '3 หน่วยกิต', seats: 'เหลือ 12 ที่นั่ง', type: 'ทฤษฎี (Section 1)', time: 'จ. 09:00 - 10:40', icon: 'school', color: '#d23669' },
    { id: 'CPE495', title: 'หัวข้อพิเศษวิศวกรรมคอมพิวเตอร์', credits: '3 หน่วยกิต', seats: 'เหลือ 5 ที่นั่ง', type: 'ปฏิบัติ (Section 2)', time: 'อ. 13:00 - 15:40', icon: 'architecture', color: '#a73355' },
    { id: 'CPE451', title: 'โปรแกรมประยุกต์', credits: '3 หน่วยกิต', seats: 'เหลือ 20 ที่นั่ง', type: 'ทฤษฎี (Section 1)', time: 'พ. 09:00 - 11:40', icon: 'cloud', color: '#7b5455' },
    { id: 'ICT376', title: 'User Experience Design', credits: '3 หน่วยกิต', seats: 'เหลือ 8 ที่นั่ง', type: 'ปฏิบัติ (Section 3)', time: 'พฤ. 13:00 - 16:40', icon: 'palette', color: '#a82d68' },
  ];

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Top AppBar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
            </View>
            <View>
              <Text style={styles.headerSubTitle}>Registration</Text>
              <Text style={styles.headerTitle}>ลงทะเบียนเรียน</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="close" size={28} color="#a73355" />
          </TouchableOpacity>
        </View>

        {/* Main Content Area */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Cart Info Header */}
          <View style={styles.summaryHeader}>
            <View>
              <Text style={styles.summarySub}>CART SUMMARY</Text>
              <Text style={styles.summaryTitle}>รายการในตะกร้า</Text>
            </View>
            <View style={styles.summaryRight}>
              <Text style={styles.totalText}>ทั้งหมด</Text>
              <Text style={styles.totalCreditsText}>12 หน่วยกิต</Text>
            </View>
          </View>

          {/* Course Cards Container */}
          <View style={styles.cardsContainer}>
            {cartItems.map((item, idx) => (
              <View key={idx} style={styles.glassCard}>
                <View style={styles.cardHeaderRow}>
                  <View style={{ flex: 1, paddingRight: 8 }}>
                    <View style={styles.courseIdBadge}>
                      <Text style={styles.courseIdText}>{item.id}</Text>
                    </View>
                    <Text style={styles.courseName}>{item.title}</Text>
                  </View>
                  <View style={styles.creditSeatContainer}>
                    <Text style={styles.creditText}>{item.credits}</Text>
                    <Text style={styles.seatText}>{item.seats}</Text>
                  </View>
                </View>

                <View style={styles.cardInfoRow}>
                  <View style={styles.infoItem}>
                    <MaterialIcons name={item.icon} size={16} color={item.color} />
                    <Text style={styles.infoText}>{item.type}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <MaterialIcons name="schedule" size={16} color={item.color} />
                    <Text style={[styles.infoText, { color: item.color, fontWeight: 'bold' }]}>{item.time}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>

        {/* Floating Confirmation Button */}
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity style={styles.confirmButton}>
            <LinearGradient colors={['#7b5455', '#a73355']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.btnGradient}>
              <MaterialIcons name="rocket-launch" size={20} color="white" />
              <Text style={styles.confirmBtnText}>ยืนยันการลงทะเบียน</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* --- สไตล์ของ Bottom Navigation แบบเรียง 4 ปุ่มมาตรฐาน --- */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#514345" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SearchCourse')}>
            <MaterialIcons name="search" size={24} color="#514345" />
            <Text style={styles.navText}>SEARCH</Text>
          </TouchableOpacity>

          {/* Active Nav (Cart) */}
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="shopping-cart" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>CART</Text>
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
  profileImageContainer: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: 'white', elevation: 2 },
  profileImage: { width: '100%', height: '100%' },
  headerSubTitle: { fontSize: 10, fontWeight: 'bold', color: '#514345', textTransform: 'uppercase', letterSpacing: 1 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#a73355', letterSpacing: -0.5 },
  menuButton: { padding: 4 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 180, paddingTop: 16 },
  summaryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 },
  summarySub: { fontSize: 10, fontWeight: 'bold', color: '#a73355', letterSpacing: 1 },
  summaryTitle: { fontSize: 24, fontWeight: '900', color: '#1f1a1c', letterSpacing: -0.5 },
  summaryRight: { alignItems: 'flex-end' },
  totalText: { fontSize: 12, color: '#514345', fontWeight: '500' },
  totalCreditsText: { fontSize: 16, fontWeight: 'bold', color: '#a73355' },
  cardsContainer: { gap: 16 },
  glassCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  courseIdBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(255, 119, 153, 0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginBottom: 6 },
  courseIdText: { color: '#a73355', fontSize: 10, fontWeight: 'bold', letterSpacing: 0.5 },
  courseName: { fontSize: 16, fontWeight: 'bold', color: '#1f1a1c' },
  creditSeatContainer: { alignItems: 'flex-end' },
  creditText: { fontSize: 10, fontWeight: 'bold', color: '#D23669', marginBottom: 2 },
  seatText: { fontSize: 10, fontWeight: 'bold', color: '#D23669' },
  cardInfoRow: { gap: 6 },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  infoText: { fontSize: 12, color: '#514345' },
  floatingButtonContainer: { position: 'absolute', bottom: 90, left: 24, right: 24, zIndex: 20 },
  confirmButton: { borderRadius: 28, overflow: 'hidden', shadowColor: '#a73355', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 8 },
  btnGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, gap: 12 },
  confirmBtnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  /* --- สไตล์ Bottom Nav 4 ปุ่ม --- */
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 10, zIndex: 30 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});