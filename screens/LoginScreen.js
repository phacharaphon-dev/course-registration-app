import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ActivityIndicator
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ loading, onLogin }) {
  const [sid, setSid] = useState('');
  const [pw, setPw] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient 
      colors={['#fff8f8', '#fbf1f3', '#f0bebe']} 
      style={styles.container}
    >
      <SafeAreaView style={styles.innerContainer}>
        
        {/* ส่วนหัว Logo */}
        <View style={styles.headerWrapper}>
          <View style={styles.logoBox}>
            <MaterialIcons name="menu-book" size={40} color="white" />
          </View>
          <Text style={styles.appName}>Scholastic Curator</Text>
          <Text style={styles.appSubName}>ระบบลงทะเบียนเรียน</Text>
        </View>

        {/* ส่วนข้อความ เข้าสู่ระบบ */}
        <View style={styles.loginTitleWrapper}>
          <Text style={styles.loginTitle}>เข้าสู่ระบบ</Text>
          <View style={styles.titleDivider} />
        </View>

        {/* ส่วนฟอร์มกรอกข้อมูล */}
        <View style={styles.formContainer}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>รหัสนักศึกษา</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="person" size={20} color="#D23669" style={styles.inputIconLeft} />
              <TextInput
                style={styles.input}
                placeholder="กรอกรหัสนักศึกษา"
                placeholderTextColor="#999"
                value={sid}
                onChangeText={setSid}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>รหัสผ่าน</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock" size={20} color="#D23669" style={styles.inputIconLeft} />
              <TextInput
                style={styles.input}
                placeholder="กรอกรหัสผ่าน"
                placeholderTextColor="#999"
                value={pw}
                onChangeText={setPw}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity 
                style={styles.inputIconRight} 
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons 
                  name={showPassword ? "visibility" : "visibility-off"} 
                  size={20} 
                  color="#D23669" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* 🌟 ปุ่ม Login สี #D23669 สวย นูน เด่น! */}
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => onLogin(sid, pw)}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
            )}
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

// 🎨 รวบรวม Styles มาไว้ในไฟล์นี้เลย จะได้ไม่ต้องไปหาที่อื่นครับ
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBox: {
    backgroundColor: '#D23669', // ใช้สีใหม่คุมโทน
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#D23669',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  appName: {
    fontSize: 26,
    fontWeight: '900',
    color: '#514345',
    letterSpacing: -0.5,
  },
  appSubName: {
    fontSize: 14,
    color: '#837375',
    marginTop: 4,
  },
  loginTitleWrapper: {
    marginBottom: 30,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1f1a1c',
    marginBottom: 8,
  },
  titleDivider: {
    width: 40,
    height: 4,
    backgroundColor: '#D23669', // เส้นขีดสีใหม่
    borderRadius: 2,
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#514345',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#a73355',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(210, 54, 105, 0.1)', // ขอบบางๆ สีชมพู
  },
  inputIconLeft: {
    marginRight: 12,
  },
  inputIconRight: {
    padding: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1f1a1c',
    fontWeight: '500',
  },
  
  // 🌟 สไตล์ปุ่มเข้าสู่ระบบที่คุณอยากได้
  loginButton: {
    backgroundColor: '#D23669',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    
    // ความนูนและเงา (Shadow)
    shadowColor: '#D23669',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900', // ตัวหนาแบบในรูป
    letterSpacing: 0.5,
  },
});