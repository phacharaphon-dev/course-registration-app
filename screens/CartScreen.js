import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, // ✅ เพิ่ม StyleSheet เข้ามาตรงนี้แล้ว
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  ActivityIndicator, 
  Alert,
  RefreshControl
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// 🌟 Import API (ตรวจสอบชื่อฟังก์ชันใน api.js ให้ตรงกันนะครับ)
import { getCartAPI, removeFromCartAPI } from '../api'; 

export default function CartScreen({ student, setView }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // 🌟 ฟังก์ชันดึงข้อมูลจาก Database
  const fetchCartData = async () => {
    if (!student || !student.student_id) {
        console.log("❌ ไม่พบข้อมูลนักศึกษา (student_id)");
        setLoading(false);
        return;
    }

    try {
      console.log(`📡 กำลังดึงข้อมูลตะกร้าของ ID: ${student.student_id}`);
      const data = await getCartAPI(student.student_id);
      
      console.log("✅ ข้อมูลที่ได้รับจาก API:", data);

      if (data && Array.isArray(data)) {
        setCartItems(data);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("❌ Fetch Cart Error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // 🌟 โหลดข้อมูลทันทีเมื่อเข้าหน้านี้
  useEffect(() => {
    fetchCartData();
  }, [student]); // เพิ่ม student เป็น dependency กันพลาด

  // ฟังก์ชันลบวิชา
  const handleDeleteItem = async (courseCode) => {
    try {
      await removeFromCartAPI(student.student_id, courseCode);
      fetchCartData(); // โหลดใหม่หลังลบ
    } catch (error) {
      Alert.alert("ผิดพลาด", "ไม่สามารถลบวิชาได้");
    }
  };

  // 🌟 คำนวณตัวเลขสรุปด้านบน
  const totalCourses = cartItems.length;
  const totalCredits = cartItems.reduce((sum, item) => sum + (parseInt(item.credits || item.course_credits || 0)), 0);

  return (
    <LinearGradient colors={['#FDEEF4', '#FFF8F8']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setView('MENU')} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#7b5455" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ตะกร้าของฉัน</Text>
          <TouchableOpacity onPress={fetchCartData}>
            <MaterialIcons name="refresh" size={24} color="#a73355" />
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#a73355" />
            <Text style={styles.loadingText}>กำลังตรวจสอบข้อมูล...</Text>
          </View>
        ) : (
          <ScrollView 
            contentContainerStyle={styles.scrollContent} 
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); fetchCartData(); }} />
            }
          >
            
            {/* 📊 Summary Card */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>จำนวนวิชาทั้งหมด</Text>
                <Text style={styles.summaryValue}>{totalCourses} วิชา</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>หน่วยกิตรวมประมาณ</Text>
                <Text style={styles.summaryValue}>{totalCredits} หน่วยกิต</Text>
              </View>
            </View>

            {cartItems.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Image 
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2038/2038854.png' }} 
                  style={styles.emptyImage} 
                />
                <Text style={styles.emptyText}>ยังไม่มีวิชาในตะกร้า</Text>
                <TouchableOpacity style={styles.goBtn} onPress={() => setView('MENU')}>
                  <Text style={styles.goBtnText}>ไปเลือกวิชาเลย</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.listContainer}>
                {cartItems.map((item, idx) => (
                  <View key={idx} style={styles.itemCard}>
                    <View style={styles.itemHeader}>
                      <View style={styles.codeBadge}>
                        <Text style={styles.codeText}>{item.course_code || item.code}</Text>
                      </View>
                      <TouchableOpacity onPress={() => handleDeleteItem(item.course_code || item.code)}>
                        <Feather name="trash-2" size={18} color="#D23669" />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.itemName}>{item.course_name || item.name}</Text>
                    <View style={styles.itemFooter}>
                      <Text style={styles.itemMeta}>
                        Sec: {item.section_number || item.sec} • {item.credits || item.course_credits} นก.
                      </Text>
                      <Text style={styles.itemTime}>
                        {item.day_of_week} {item.start_time}:00
                      </Text>
                    </View>
                  </View>
                ))}

                <TouchableOpacity 
                    style={styles.checkoutBtn} 
                    onPress={() => Alert.alert("ยืนยัน", "ส่งข้อมูลลงทะเบียนไปยังระบบกลาง?", [
                        {text: "ยกเลิก"},
                        {text: "ตกลง", onPress: () => setView('SCHEDULE')}
                    ])}
                >
                   <LinearGradient colors={['#D23669', '#a73355']} style={styles.checkoutGradient}>
                      <Text style={styles.checkoutText}>ยืนยันการลงทะเบียนทั้งหมด</Text>
                   </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        )}

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('MENU')}><MaterialIcons name="home" size={24} color="#837375" /><Text style={styles.navText}>HOME</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('MANUAL')}><MaterialIcons name="search" size={24} color="#837375" /><Text style={styles.navText}>SEARCH</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItemActive}><MaterialIcons name="shopping-cart" size={24} color="#a73355" /><Text style={styles.navTextActive}>CART</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setView('SCHEDULE')}><MaterialIcons name="calendar-today" size={24} color="#837375" /><Text style={styles.navText}>SCHEDULE</Text></TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#7b5455' },
  backButton: { padding: 8, backgroundColor: 'white', borderRadius: 12 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#a73355', fontSize: 12 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 120, paddingTop: 20 },
  summaryCard: { backgroundColor: 'white', borderRadius: 24, padding: 20, flexDirection: 'row', marginBottom: 25, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
  summaryItem: { flex: 1, alignItems: 'center' },
  divider: { width: 1, height: '100%', backgroundColor: '#F0F0F0' },
  summaryLabel: { fontSize: 10, color: '#837375', marginBottom: 6, fontWeight: 'bold' },
  summaryValue: { fontSize: 18, fontWeight: '900', color: '#1f1a1c' },
  emptyContainer: { alignItems: 'center', marginTop: 50 },
  emptyImage: { width: 140, height: 140, opacity: 0.3, marginBottom: 20 },
  emptyText: { fontSize: 16, fontWeight: 'bold', color: '#837375', marginBottom: 25 },
  goBtn: { backgroundColor: '#a73355', paddingHorizontal: 35, paddingVertical: 14, borderRadius: 25 },
  goBtnText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  listContainer: { gap: 12 },
  itemCard: { backgroundColor: 'white', borderRadius: 20, padding: 16, borderLeftWidth: 5, borderLeftColor: '#D23669', elevation: 2 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  codeBadge: { backgroundColor: '#FDEEF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  codeText: { fontSize: 12, fontWeight: 'bold', color: '#D23669' },
  itemName: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 12 },
  itemFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  itemMeta: { fontSize: 11, color: '#837375' },
  itemTime: { fontSize: 11, color: '#a73355', fontWeight: 'bold' },
  checkoutBtn: { marginTop: 15, borderRadius: 20, overflow: 'hidden' },
  checkoutGradient: { paddingVertical: 16, alignItems: 'center' },
  checkoutText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  bottomNav: { position: 'absolute', bottom: 20, left: 16, right: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 40, paddingHorizontal: 8, paddingVertical: 8, elevation: 10 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 24 },
  navTextActive: { fontSize: 9, fontWeight: 'bold', color: '#a73355', marginTop: 4 },
  navItem: { alignItems: 'center', paddingHorizontal: 8, paddingVertical: 10 },
  navText: { fontSize: 9, fontWeight: 'bold', color: '#837375', marginTop: 4 },
});