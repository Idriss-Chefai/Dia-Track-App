import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { deletePatient } from '../services/patientService';
import DeleteModal from '../components/DeleteModal';

const DoctorItem = ({ doctor }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleNavigateToPatientInfo = () => {
    navigation.navigate('PatientInfo', { doctor: doctor });
  };

  const handleDelete = async () => {
    try {
      await deletePatient(doctor.patient_id);
      console.log(`Patient ${doctor.name} ${doctor.surname} supprimé`);
      setModalVisible(false); // Close the modal after successful deletion
    } catch (error) {
      console.error('Erreur lors de la suppression du patient:', error);
      Alert.alert('Erreur', 'La suppression du patient a échoué.');
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: doctor.image }} style={styles.patientImage} />
      <TouchableOpacity style={styles.patientInfoContainer} onPress={handleNavigateToPatientInfo}>
        <Text style={styles.name}>{doctor.name} {doctor.surname}</Text>
        <Text style={styles.details}>Type: {doctor.diabetesType}</Text>
        <Text style={styles.details}>Poids: {doctor.poids}</Text>
        <Text style={styles.details}>Taille: {doctor.taille}</Text>
        <Text style={styles.details}>Diagnostiqué: {doctor.dateDiagnostic}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteIconContainer} onPress={() => setModalVisible(true)}>
        <Icon name="trash-2" size={24} color="#ff4d4f" />
      </TouchableOpacity>
      <DeleteModal
        visible={isModalVisible}
        onCancel={() => setModalVisible(false)}
        onDelete={handleDelete}
        patientName={doctor.name}
        patientSurname={doctor.surname}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
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
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  patientInfoContainer: {
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
  deleteIconContainer: {
    marginLeft: 10,
  },
});

export default DoctorItem;