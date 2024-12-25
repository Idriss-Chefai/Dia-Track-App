import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <Text style={styles.description}>Here you can chat with your doctors or support team.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#5a5a5a',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ChatScreen;
