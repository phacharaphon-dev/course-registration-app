import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>นี่คือส่วน Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#3b82f6', // สีฟ้า
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

// สำคัญ! บรรทัดนี้คือการ "ส่งออก" เพื่อให้ App.js ดึงไปใช้ได้
export default Header;