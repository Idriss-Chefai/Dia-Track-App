import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Navigation = ({ navigation }) => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={{ uri: 'https://example.com/profileIcon.png' }}
          style={styles.navigationIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    padding: 0,
    backgroundColor: '#22D6D9', // White background
  },
  navigationIcon: {
    width: 30,
    height: 30,
    tintColor: '#22D6D9', // Teal icon color
  },
});

export default Navigation;