import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Alert } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function GroupSyncScreen({ student, setView }) {
  const [groupCode, setGroupCode] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [mode, setMode] = useState('JOIN'); 

  // ข้อมูลจำลอง
  const syncCourses = [
    { id: 'CPE407', title: 'เครือข่ายสื่อสารคอมพิวเตอร์', matchText: '5/5 Match', isMatch: true },
    { id: 'CPE451', title: 'โปรแกรมประยุกต์ (Sec 002)', matchText: '4/5 Sync', isMatch: true },
    { id: 'CPE495', title: 'หัวข้อพิเศษ I', matchText: 'ยังไม่มีเพื่อนลงวิชานี้', isMatch: false },
  ];

  const handleCreateGroup = () => {
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGroupCode(newCode);
    setIsJoined(true);
    Alert.alert("สร้างกลุ่มสำเร็จ", `ส่งรหัส ${newCode} ให้เพื่อนของคุณครับ`);
  };

  const handleJoinGroup = () => {
    if (groupCode.length < 6) return Alert.alert("แจ้งเตือน", "กรุณากรอกรหัส 6 หลัก");
    setIsJoined(true);
  };

  // 🌟 ฟังก์ชันจำลองการกดเพิ่มวิชา
  const handleAddCourse = () => {
    Alert.alert("เพิ่มรายวิชา", "ฟังก์ชันค้นหาและเพิ่มรายวิชาเพื่อซิงค์กับเพื่อน");
  };

  return (
    <LinearGradient colors={['#FFDAE4', '#FFF8F8']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setView('MENU')} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#a73355" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>เพื่อนช่วยลง</Text>
          <View style={{ width: 44 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {!isJoined ? (
            <View style={styles.setupCard}>
              <View style={styles.tabRow}>
                <TouchableOpacity style={[styles.tab, mode === 'JOIN' && styles.tabActive]} onPress={() => setMode('JOIN')}>
                  <Text style={[styles.tabText, mode === 'JOIN' && styles.tabTextActive]}>เข้าร่วมกลุ่ม</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, mode === 'CREATE' && styles.tabActive]} onPress={() => setMode('CREATE')}>
                  <Text style={[styles.tabText, mode === 'CREATE' && styles.tabTextActive]}>สร้างกลุ่มใหม่</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputArea}>
                <Text style={styles.inputLabel}>
                  {mode === 'JOIN' ? 'กรอกรหัส 6 หลักจากเพื่อน' : 'เริ่มสร้างกลุ่มใหม่เพื่อซิงค์ตารางเรียน'}
                </Text>
                {mode === 'JOIN' && (
                  <TextInput 
                    style={styles.input} 
                    placeholder="AB12CD" 
                    maxLength={6}
                    onChangeText={setGroupCode}
                  />
                )}
                <TouchableOpacity style={styles.mainActionBtn} onPress={mode === 'JOIN' ? handleJoinGroup : handleCreateGroup}>
                  <Text style={styles.mainActionBtnText}>{mode === 'JOIN' ? 'ตกลง เข้าร่วมกลุ่ม' : 'สร้าง Group Code'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              {/* รายชื่อเพื่อน */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>สมาชิกในกลุ่ม ({groupCode})</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.avatarList}>
                  <View style={styles.avatarItem}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.avatar} />
                    <Text style={styles.avatarName}>คุณ</Text>
                  </View>
                  {['ฟิล์ม', 'บอส'].map(name => (
                    <View key={name} style={styles.avatarItem}>
                      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/168/168724.png' }} style={[styles.avatar, {opacity: 0.6}]} />
                      <Text style={styles.avatarName}>{name}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>

              {/* รายชื่อวิชาที่ซิงค์ */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>วิชาที่ซิงค์กับเพื่อน</Text>
                
                {syncCourses.map((course, idx) => (
                  <View key={idx} style={styles.courseCard}>
                    <View style={styles.courseInfo}>
                      <Text style={styles.courseCode}>{course.id}</Text>
                      <Text style={styles.courseName}>{course.title}</Text>
                      <Text style={[styles.matchText, {color: course.isMatch ? '#16a34a' : '#837375'}]}>{course.matchText}</Text>
                    </View>
                    <MaterialIcons name={course.isMatch ? "check-circle" : "radio-button-unchecked"} size={24} color={course.isMatch ? "#16a34a" : "#ccc"} />
                  </View>
                ))}

                {/* 🌟 ปุ่มเพิ่มวิชา (เพิ่มเข้ามาใหม่) */}
                <TouchableOpacity style={styles.addCourseBtn} onPress={handleAddCourse}>
                  <MaterialIcons name="add-circle-outline" size={24} color="#a73355" />
                  <Text style={styles.addCourseBtnText}>เพิ่มรายวิชาที่ต้องการซิงค์</Text>
                </TouchableOpacity>
                
              </View>
            </>
          )}
        </ScrollView>

        {/* Bottom Nav */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => setView('MENU')}><MaterialIcons name="home" size={24} color="#837375" /></TouchableOpacity>
          <View style={styles.navActive}><MaterialIcons name="group" size={24} color="#a73355" /></View>
          <TouchableOpacity onPress={() => setView('CART')}><MaterialIcons name="shopping-cart" size={24} color="#837375" /></TouchableOpacity>
          <TouchableOpacity onPress={() => setView('SCHEDULE')}><MaterialIcons name="calendar-today" size={24} color="#837375" /></TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#7b5455' },
  backButton: { padding: 8, backgroundColor: 'white', borderRadius: 12 },
  scrollContent: { padding: 20, paddingBottom: 100 },
  setupCard: { backgroundColor: 'white', borderRadius: 24, padding: 20, elevation: 4 },
  tabRow: { flexDirection: 'row', backgroundColor: '#FDEEF4', borderRadius: 12, padding: 4, marginBottom: 20 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  tabActive: { backgroundColor: 'white' },
  tabText: { fontSize: 13, color: '#837375', fontWeight: 'bold' },
  tabTextActive: { color: '#a73355' },
  inputArea: { alignItems: 'center' },
  inputLabel: { fontSize: 13, color: '#514345', marginBottom: 15, textAlign: 'center' },
  input: { width: '100%', backgroundColor: '#F9FAFB', borderRadius: 12, padding: 15, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#a73355', marginBottom: 20, borderWidth: 1, borderColor: '#eee' },
  mainActionBtn: { width: '100%', backgroundColor: '#a73355', padding: 16, borderRadius: 12, alignItems: 'center' },
  mainActionBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 15 },
  avatarList: { flexDirection: 'row' },
  avatarItem: { alignItems: 'center', marginRight: 20 },
  avatar: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: '#a73355' },
  avatarName: { fontSize: 10, marginTop: 4, color: '#514345' },
  courseCard: { backgroundColor: 'white', borderRadius: 16, padding: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 10, elevation: 2 },
  courseInfo: { flex: 1 },
  courseCode: { fontSize: 14, fontWeight: 'bold', color: '#a73355' },
  courseName: { fontSize: 12, color: '#1f1a1c' },
  matchText: { fontSize: 10, fontWeight: 'bold', marginTop: 4 },
  
  // 🌟 สไตล์ปุ่มเพิ่มวิชา
  addCourseBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#FDEEF4', // สีชมพูอ่อนพาสเทล
    paddingVertical: 14, 
    borderRadius: 16, 
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    borderStyle: 'dashed' // ขอบประให้ดูเป็นปุ่มเพิ่ม
  },
  addCourseBtnText: { 
    color: '#a73355', 
    fontWeight: 'bold', 
    fontSize: 14,
    marginLeft: 8
  },

  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white', paddingBottom: 30, paddingTop: 15, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 20 },
  navActive: { backgroundColor: '#FDEEF4', padding: 10, borderRadius: 15 }
});