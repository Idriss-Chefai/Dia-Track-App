import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Assuming you're using Feather icons
import { useNavigation } from '@react-navigation/native'; // Hook to access navigation

const Header = ({ title }) => {
  const navigation = useNavigation(); // Access navigation object

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log('Logout pressed');
    // Example: navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.leftAction}>
        <Icon name="arrow-left" size={24} color="#fff" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={handleLogout} style={styles.rightAction}>
        <Icon name="log-out" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute', // Keep the header fixed on top
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 5,
    backgroundColor: '#007bff', // Modern, cool blue
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000, // Make sure it stays on top
    elevation: 10, // Elevation for shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom : 10
  },
  leftAction: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    flex: 1, // Ensures the title stays centered
    position: 'absolute', // Position the title absolutely
    left: 50, // Align to the center accounting for the left and right icons
    right: 50, // Align to the center accounting for the left and right icons
  },
  rightAction: {
    padding: 10,
  },
});

export default Header;
