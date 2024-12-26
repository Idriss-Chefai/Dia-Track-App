import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header'; // Import the Header component

const ChatScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Add the header component */}
      <Header title="Chat" />

      <View style={styles.content}>
        <Text style={styles.title}>Chat</Text>
        <Text style={styles.description}>En cours de developpement</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa', // Light blue background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
