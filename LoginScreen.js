import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
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
          <Text style={styles.appSubName}>Academic Excellence Portal</Text>
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
              <MaterialIcons name="badge" size={20} color="#837375" style={styles.inputIconLeft} />
              <TextInput 
                style={styles.input} 
                placeholder="Student ID"
                placeholderTextColor="#837375"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>รหัสผ่าน</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock" size={20} color="#837375" style={styles.inputIconLeft} />
              <TextInput 
                style={styles.input} 
                placeholder="Password"
                placeholderTextColor="#837375"
                secureTextEntry={!showPassword} 
              />
              <TouchableOpacity 
                style={styles.inputIconRight} 
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons 
                  name={showPassword ? "visibility" : "visibility-off"} 
                  size={20} 
                  color="#837375" 
                />
              </TouchableOpacity>
            </View>
          </View>

         {/* ลืมรหัสผ่าน */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>ลืมรหัสผ่าน?</Text>
          </TouchableOpacity>

          {/* ปุ่มเข้าสู่ระบบ */}
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => navigation.navigate('Home')} 
          >
            <LinearGradient 
              colors={['#7b5455', '#a73355']} 
              style={styles.loginButtonGradient}
            >
              <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
              <MaterialIcons name="arrow-forward" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>

        </View>

        {/* ส่วนท้าย Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerContent}>
            <MaterialIcons name="help-outline" size={16} color="#514345" />
            <Text style={styles.footerText}>
              มีปัญหาในการเข้าสู่ระบบ? <Text style={styles.footerLink}>ติดต่อฝ่ายทะเบียน</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  headerWrapper: {
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: '#D23669',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    transform: [{ rotate: '-3deg' }],
  },
  appName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1f1a1c',
    marginBottom: 8,
  },
  appSubName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#514345',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    opacity: 0.7,
  },
  loginTitleWrapper: {
    marginTop: 64,
    width: '100%',
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f1a1c',
  },
  titleDivider: {
    height: 4,
    width: 48,
    backgroundColor: '#a73355',
    marginTop: 8,
    borderRadius: 4,
  },
  formContainer: {
    marginTop: 40,
    width: '100%',
    gap: 24, 
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#514345',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  inputIconLeft: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  inputIconRight: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    paddingLeft: 48,
    paddingRight: 48,
    color: '#1f1a1c',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#a73355',
  },
  loginButton: {
    width: '100%',
    height: 64,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 16,
  },
  loginButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 40,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(81, 67, 69, 0.7)',
  },
  footerLink: {
    color: '#a73355',
    fontWeight: 'bold',
  },
});