import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>กดฉันสิ!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#10b981', // สีเขียว
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default MyButton;