import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddFriendScreen({ navigation }) {
  // ข้อมูลเพื่อนจำลอง
  const friends = [
    { id: '66085365', name: 'ฉัตรเพชร การิสุข', selected: false, image: 'https://cdn-icons-png.flaticon.com/512/168/168721.png', reverse: false },
    { id: '66085721', name: 'วุฒิไกร แย้มพุ่ม', selected: true, image: 'https://cdn-icons-png.flaticon.com/512/168/168722.png', reverse: true },
    { id: '66000320', name: 'อบัสดรูน แมหะ', selected: false, image: 'https://cdn-icons-png.flaticon.com/512/168/168723.png', reverse: false },
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
            <Text style={styles.headerTitle}>The Digital Curator</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
          </View>
        </View>

        {/* Main Content Area */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeSub}>ยินดีต้อนรับ</Text>
            <Text style={styles.welcomeMain}>สวัสดี พชรพล</Text>
            <Text style={styles.welcomeMajor}>คณะเทคโนโลยีสารสนเทศ | ปี 3</Text>
          </View>

          {/* Search Bar Section */}
          <View style={styles.searchSection}>
            <Text style={styles.searchTitle}>ค้นหาเพื่อนร่วมชั้น</Text>
            <View style={styles.searchRow}>
              <View style={styles.searchInputContainer}>
                <MaterialIcons name="search" size={20} color="#837375" style={styles.searchIcon} />
                <TextInput 
                  style={styles.searchInput}
                  placeholder="กรอกรหัสนักศึกษา..."
                  placeholderTextColor="rgba(131, 115, 117, 0.5)"
                />
              </View>
              <TouchableOpacity style={styles.searchBtn}>
                <Text style={styles.searchBtnText}>ค้นหา</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Results */}
          <View style={styles.resultsContainer}>
            {friends.map((friend, idx) => (
              <View 
                key={idx} 
                style={[
                  styles.friendCard, 
                  friend.reverse ? styles.cardReverse : styles.cardNormal,
                  friend.selected && styles.cardSelected
                ]}
              >
                <View style={[styles.friendImageWrapper, friend.reverse ? styles.imageRotateRight : styles.imageRotateLeft]}>
                  <Image source={{ uri: friend.image }} style={styles.friendImage} />
                </View>
                
                <View style={[styles.friendInfo, friend.reverse && styles.textRight]}>
                  <Text style={styles.friendId}>{friend.id}</Text>
                  <Text style={styles.friendName}>{friend.name}</Text>
                  
                  <TouchableOpacity style={[styles.selectBtn, friend.selected ? styles.btnSelected : styles.btnUnselected]}>
                    <Text style={[styles.selectBtnText, friend.selected ? styles.textSelected : styles.textUnselected]}>
                      {friend.selected ? 'เลือกแล้ว' : 'เลือก'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Decorative Background Icon */}
                <MaterialIcons 
                  name={friend.selected ? "verified-user" : "person-add"} 
                  size={64} 
                  color="rgba(167, 51, 85, 0.05)" 
                  style={[styles.bgIcon, friend.reverse ? styles.bgIconLeft : styles.bgIconRight]} 
                />
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Primary Action */}
        <View style={styles.ctaWrapper}>
          <TouchableOpacity style={styles.ctaButton}>
            <MaterialIcons name="group-add" size={20} color="white" />
            <Text style={styles.ctaText}>เพิ่มเพื่อนที่ต้องการเข้ากลุ่ม</Text>
          </TouchableOpacity>
        </View>

        {/* BottomNavBar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#837375" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          {/* Active Nav */}
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="search" size={24} color="#a73355" />
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
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backButton: { padding: 4, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.3)' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#1f1a1c' },
  profileImageContainer: { width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', backgroundColor: '#f0bebe' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 180, paddingTop: 8 },
  welcomeSection: { marginBottom: 24 },
  welcomeSub: { fontSize: 10, fontWeight: 'bold', color: '#a73355', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 },
  welcomeMain: { fontSize: 24, fontWeight: '900', color: '#1f1a1c', marginBottom: 2 },
  welcomeMajor: { fontSize: 11, fontWeight: '600', color: '#514345' },
  searchSection: { marginBottom: 24 },
  searchTitle: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 12 },
  searchRow: { flexDirection: 'row', gap: 8 },
  searchInputContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.6)', borderWidth: 1, borderColor: 'white', borderRadius: 12, paddingHorizontal: 12, height: 44 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 12, color: '#1f1a1c' },
  searchBtn: { backgroundColor: '#a73355', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24, borderRadius: 12, height: 44 },
  searchBtnText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  resultsContainer: { gap: 16 },
  friendCard: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'white', overflow: 'hidden', position: 'relative' },
  cardNormal: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  cardReverse: { flexDirection: 'row-reverse', alignItems: 'center', gap: 16 },
  cardSelected: { borderLeftWidth: 4, borderLeftColor: '#a73355', borderColor: 'rgba(167, 51, 85, 0.2)' },
  friendImageWrapper: { width: 64, height: 80, borderRadius: 8, backgroundColor: '#f5ebed', overflow: 'hidden', zIndex: 2 },
  imageRotateLeft: { transform: [{ rotate: '-2deg' }] },
  imageRotateRight: { transform: [{ rotate: '2deg' }] },
  friendImage: { width: '100%', height: '100%' },
  friendInfo: { flex: 1, zIndex: 2 },
  textRight: { alignItems: 'flex-end' },
  friendId: { fontSize: 14, fontWeight: 'bold', color: '#1f1a1c' },
  friendName: { fontSize: 11, fontWeight: 'bold', color: '#514345', marginBottom: 12 },
  selectBtn: { paddingHorizontal: 20, paddingVertical: 6, borderRadius: 16, alignSelf: 'flex-start' },
  btnSelected: { backgroundColor: '#a73355' },
  btnUnselected: { backgroundColor: '#FDEEF4', borderWidth: 1, borderColor: 'rgba(167, 51, 85, 0.2)' },
  textSelected: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  textUnselected: { color: '#a73355', fontSize: 10, fontWeight: 'bold' },
  bgIcon: { position: 'absolute', bottom: -10, zIndex: 1 },
  bgIconRight: { right: -10 },
  bgIconLeft: { left: -10 },
  ctaWrapper: { position: 'absolute', bottom: 100, left: 24, right: 24, zIndex: 20 },
  ctaButton: { backgroundColor: '#a73355', height: 56, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, shadowColor: '#a73355', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16, elevation: 8, borderBottomWidth: 4, borderBottomColor: '#87193e' },
  ctaText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.85)', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, borderTopLeftRadius: 40, borderTopRightRadius: 40, zIndex: 30 },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navText: { color: '#837375', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItemActive: { alignItems: 'center', backgroundColor: '#FDEEF4', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 24, transform: [{ translateY: -4 }] },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
});