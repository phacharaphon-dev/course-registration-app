import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddCourseScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="menu" size={24} color="#7b5455" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ลงทะเบียนเรียน</Text>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileImage} />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={20} color="#837375" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search for courses"
            placeholderTextColor="rgba(81, 67, 69, 0.5)"
          />
        </View>

        {/* Filter Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabTextInactive}>CORE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabTextInactive}>ELECTIVES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabTextInactive}>MINOR</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Recommended Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>RECOMMENDED</Text>
        </View>

        {/* Course Card 1 */}
        <View style={styles.courseCard}>
          <View style={styles.cardTopRow}>
            <View style={styles.tagBadge}>
              <Text style={styles.tagText}>CPE407</Text>
            </View>
            <View style={styles.creditInfo}>
              <MaterialIcons name="analytics" size={14} color="#514345" />
              <Text style={styles.creditText}>3 Credits</Text>
            </View>
          </View>
          <Text style={styles.courseTitle}>เครือข่ายคอมพิวเตอร์</Text>
          <View style={styles.profInfo}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }} style={styles.profImage} />
            <Text style={styles.profName}>ผู้ช่วยศาสตราจารย์ Dr. สมชาย</Text>
          </View>
          <TouchableOpacity style={styles.selectButton}>
            <LinearGradient colors={['#7b5455', '#a73355']} style={styles.btnGradient}>
              <Text style={styles.selectBtnText}>เลือกรายวิชา</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Course Card 2 */}
        <View style={styles.courseCard}>
          <View style={styles.cardTopRow}>
            <View style={styles.tagBadgeGray}>
              <Text style={styles.tagTextGray}>CPE451</Text>
            </View>
            <View style={styles.creditInfo}>
              <MaterialIcons name="school" size={14} color="#514345" />
              <Text style={styles.creditText}>3 Credits</Text>
            </View>
          </View>
          <Text style={styles.courseTitle}>โปรแกรมประยุกต์</Text>
          <View style={styles.profInfo}>
            <View style={styles.profIconPlaceholder}>
              <MaterialIcons name="person" size={16} color="#514345" />
            </View>
            <Text style={styles.profName}>Dr. Vipada Suksabai</Text>
          </View>
          <TouchableOpacity style={styles.selectButton}>
            <LinearGradient colors={['#7b5455', '#a73355']} style={styles.btnGradient}>
              <Text style={styles.selectBtnText}>เลือกรายวิชา</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Full Courses Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleGray}>FULL CAPACITY</Text>
        </View>

        {/* Full Course Card (Disabled) */}
        <View style={styles.fullCourseCard}>
          <View style={styles.fullCardTopRow}>
            <View>
              <Text style={styles.fullCourseId}>GEN121</Text>
              <Text style={styles.fullCourseTitle}>Learning and Problem Solving</Text>
            </View>
            <Text style={styles.fullCreditText}>2 Credits</Text>
          </View>
          <View style={styles.fullBadge}>
            <Text style={styles.fullBadgeText}>เต็มแล้ว</Text>
          </View>
        </View>

      </ScrollView>

      {/* Unified Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemsContainer}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="home" size={24} color="#514345" />
            <Text style={styles.navText}>HOME</Text>
          </TouchableOpacity>
          
          {/* Active Tab (Search) */}
          <TouchableOpacity style={styles.navItemActive}>
            <MaterialIcons name="search" size={24} color="#a73355" />
            <Text style={styles.navTextActive}>SEARCH</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="shopping-cart" size={24} color="#514345" />
            <Text style={styles.navText}>CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="calendar-today" size={24} color="#514345" />
            <Text style={styles.navText}>SCHEDULE</Text>
          </TouchableOpacity>
        </View>
        
        {/* Integrated Back Button */}
        <TouchableOpacity 
          style={styles.backButtonBottom}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#a73355" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8f8' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, backgroundColor: 'rgba(255, 248, 248, 0.9)', zIndex: 10 },
  menuButton: { padding: 8, borderRadius: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1f1a1c' },
  profileImageContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#f0bebe', overflow: 'hidden' },
  profileImage: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 120, paddingTop: 8 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fbf1f3', borderRadius: 24, paddingHorizontal: 16, height: 52, marginBottom: 24 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: '100%', color: '#1f1a1c', fontSize: 14 },
  tabsContainer: { flexDirection: 'row', marginBottom: 32 },
  tabActive: { backgroundColor: '#a73355', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 8 },
  tabTextActive: { color: 'white', fontSize: 12, fontWeight: 'bold', letterSpacing: 1 },
  tabInactive: { backgroundColor: '#f5ebed', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 8 },
  tabTextInactive: { color: '#514345', fontSize: 12, fontWeight: 'bold', letterSpacing: 1 },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 10, fontWeight: 'bold', color: '#a73355', letterSpacing: 1.5 },
  sectionTitleGray: { fontSize: 10, fontWeight: 'bold', color: 'rgba(81, 67, 69, 0.6)', letterSpacing: 1.5, marginTop: 16 },
  courseCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.3)', marginBottom: 20 },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  tagBadge: { backgroundColor: 'rgba(255, 119, 153, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  tagText: { color: '#ff7799', fontSize: 12, fontWeight: 'bold' },
  tagBadgeGray: { backgroundColor: '#eae0e2', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  tagTextGray: { color: '#514345', fontSize: 12, fontWeight: 'bold' },
  creditInfo: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  creditText: { fontSize: 10, color: '#514345' },
  courseTitle: { fontSize: 18, fontWeight: 'bold', color: '#1f1a1c', marginBottom: 16 },
  profInfo: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 20 },
  profImage: { width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: '#d6c2c4' },
  profIconPlaceholder: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#eae0e2', justifyContent: 'center', alignItems: 'center' },
  profName: { fontSize: 11, fontWeight: '500', color: '#514345' },
  selectButton: { borderRadius: 12, overflow: 'hidden' },
  btnGradient: { paddingVertical: 14, alignItems: 'center' },
  selectBtnText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  fullCourseCard: { backgroundColor: 'rgba(242, 242, 242, 0.5)', borderRadius: 16, padding: 24, borderWidth: 2, borderColor: 'rgba(214, 194, 196, 0.4)', borderStyle: 'dashed', marginTop: 8 },
  fullCardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  fullCourseId: { fontSize: 10, fontWeight: 'bold', color: 'rgba(167, 51, 85, 0.4)', marginBottom: 4 },
  fullCourseTitle: { fontSize: 18, fontWeight: 'bold', color: 'rgba(31, 26, 28, 0.3)' },
  fullCreditText: { fontSize: 10, fontWeight: 'bold', color: 'rgba(167, 51, 85, 0.3)' },
  fullBadge: { backgroundColor: 'rgba(255, 255, 255, 0.4)', paddingVertical: 16, borderRadius: 30, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(214, 194, 196, 0.2)' },
  fullBadgeText: { fontSize: 18, fontWeight: 'bold', color: 'rgba(31, 26, 28, 0.3)' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderTopLeftRadius: 32, borderTopRightRadius: 32, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12, shadowColor: 'black', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.06, shadowRadius: 32, elevation: 10 },
  navItemsContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginRight: 8 },
  navItemActive: { alignItems: 'center', backgroundColor: 'rgba(167, 51, 85, 0.1)', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  navTextActive: { color: '#a73355', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  navItem: { alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8 },
  navText: { color: '#514345', fontSize: 10, fontWeight: 'bold', marginTop: 4, letterSpacing: 0.5 },
  backButtonBottom: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(167, 51, 85, 0.1)', justifyContent: 'center', alignItems: 'center' },
});