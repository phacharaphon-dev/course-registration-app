import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// เราสามารถเรียก MyButton มาใช้ใน Content ได้ด้วย (ซ้อนกันไปอีก)
import MyButton from './MyButton'; 

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>นี่คือส่วนเนื้อหาหลัก (Content)</Text>
      
      {/* ลองเรียกใช้ปุ่มที่เราจะสร้างในไฟล์ต่อไป */}
      <MyButton /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ขยายเต็มพื้นที่ที่เหลือ
    backgroundColor: '#e5e7eb', // สีเทาอ่อน
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  }
});

export default Content;