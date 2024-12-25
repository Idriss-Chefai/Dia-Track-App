import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder profile image
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>
      <Text style={styles.description}>
        Update your profile information and manage your account settings here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  email: {
    fontSize: 16,
    color: '#5a5a5a',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#5a5a5a',
    textAlign: 'center',
  },
});

export default ProfileScreen;
