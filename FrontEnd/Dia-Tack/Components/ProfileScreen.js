import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';
import Section from './Section';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Profile
          name="Jane Doe"
          phone="+123 567 89000"
          email="jane.doe@example.com"
          imageUri="https://th.bing.com/th/id/OIP.a-rWWpkxO5r4iwUAhh2d5wHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7"
        />
      </View>
      <Section title="Profile" icon="user" onPress={() => navigation.navigate('Profile')} />
      <Section title="Favorite" icon="heart" onPress={() => navigation.navigate('Favorite')} />
      <Section title="Payment Method" icon="credit-card" onPress={() => navigation.navigate('PaymentMethod')} />
      <Section title="Privacy Policy" icon="lock" onPress={() => navigation.navigate('PrivacyPolicy')} />
      <Section title="Settings" icon="settings" onPress={() => navigation.navigate('Settings')} />
      <Section title="Help" icon="help-circle" onPress={() => navigation.navigate('Help')} />
      <Section title="Logout" icon="log-out" onPress={() => navigation.navigate('Logout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // White background
  },
  upperSection: {
    backgroundColor: '#22D6D9', // Teal background
    padding: 20,
  },
});

export default ProfileScreen;