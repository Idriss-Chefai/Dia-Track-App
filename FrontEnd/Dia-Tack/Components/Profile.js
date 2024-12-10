import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = ({ name, phone, email, imageUri }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileBackground}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: imageUri }}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileInfo}>{phone}</Text>
          <Text style={styles.profileInfo}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
    backgroundColor: '#22D6D9',
  },
  profileBackground: {
    backgroundColor: '#22D6D9', // Teal background
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 120, // Larger profile picture
    height: 120, // Larger profile picture
    borderRadius: 60, // Half of the width/height to make it a circle
  },
  profileInfoContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // White text
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 12,
    color: '#ffffff', // White text
    marginBottom: 5,
  },
});

export default Profile;