import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DoctorItem = ({ doctor }) => {
  const navigation = useNavigation();

  // Navigate to the PatientInfoScreen
  const handleNavigateToPatientInfo = () => {
    navigation.navigate('PatientInfo', { doctor: doctor });
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handleNavigateToPatientInfo}>
      {/* Image on the Left */}
      <Image source={{ uri: doctor.image }} style={styles.patientImage} />

      {/* Text Information on the Right */}
      <View style={styles.patientInfo}>
        <Text style={styles.name}>{doctor.name} {doctor.surname}</Text>
        <Text style={styles.details}>Type: {doctor.diabetesType}</Text>
        <Text style={styles.details}>Poids: {doctor.poids}</Text>
        <Text style={styles.details}>Taille: {doctor.taille}</Text>
        <Text style={styles.details}>Diagnostiqué: {doctor.dateDiagnostic}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',  // Image on the left, text on the right
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  patientImage: {
    width: 70,  // Image size
    height: 70, // Image size
    borderRadius: 35, // Makes the image round
    marginRight: 20, // Space between image and text
  },
  patientInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});

export default DoctorItem;
