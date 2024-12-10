import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Section = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sectionContainer}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color="#22D6D9" /> {/* Teal icon color */}
      </View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.arrowContainer}>
        <Icon name="chevron-right" size={20} color="#22D6D9" /> {/* Teal arrow color */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc', // Light gray border
    backgroundColor: '#ffffff', // White background
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#333333', // Dark gray text
    flex: 1,
  },
  arrowContainer: {
    marginLeft: 10,
  },
});

export default Section;