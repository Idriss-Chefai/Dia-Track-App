import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.pageTitle}>{title}</Text>
      </View>
      <View style={styles.headerRight}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#22D6D9', // Teal background
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerCenter: {
    flex: 2,
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // White text
  },
});

export default CustomHeader;