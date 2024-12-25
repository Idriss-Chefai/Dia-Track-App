import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoctorItem from '../components/DoctorItem'; // Assuming this component is the one that displays patient details
import { useNavigation } from '@react-navigation/native';

const PatientScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Static list of patients (simulating the ones linked to a doctor)
  const patients = [
    { 
      id: '1', 
      name: 'Emily', 
      surname: 'Brown', 
      diabetesType: 'Type 1', 
      poids: '70 kg',
      taille: '1.65 m',
      dateDiagnostic: 'Mars 2021',
      image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
    },
    { 
      id: '2', 
      name: 'John', 
      surname: 'Smith', 
      diabetesType: 'Type 2', 
      poids: '85 kg',
      taille: '1.80 m',
      dateDiagnostic: 'Juin 2020',
      image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
    },
    { 
      id: '3', 
      name: 'Sophia', 
      surname: 'Martinez', 
      diabetesType: 'Type 1', 
      poids: '65 kg',
      taille: '1.60 m',
      dateDiagnostic: 'Septembre 2022',
      image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
    },
    { 
      id: '4', 
      name: 'Michael', 
      surname: 'Johnson', 
      diabetesType: 'Type 2', 
      poids: '95 kg',
      taille: '1.75 m',
      dateDiagnostic: 'Décembre 2021',
      image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
    },
    { 
        id: '5', 
        name: 'Sophia', 
        surname: 'Martinez', 
        diabetesType: 'Type 1', 
        poids: '65 kg',
        taille: '1.60 m',
        dateDiagnostic: 'Septembre 2022',
        image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
      },
      { 
        id: '6', 
        name: 'Michael', 
        surname: 'Johnson', 
        diabetesType: 'Type 2', 
        poids: '95 kg',
        taille: '1.75 m',
        dateDiagnostic: 'Décembre 2021',
        image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
      },
      { 
        id: '7', 
        name: 'Sophia', 
        surname: 'Martinez', 
        diabetesType: 'Type 1', 
        poids: '65 kg',
        taille: '1.60 m',
        dateDiagnostic: 'Septembre 2022',
        image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
      },
      { 
        id: '8', 
        name: 'Michael', 
        surname: 'Johnson', 
        diabetesType: 'Type 2', 
        poids: '95 kg',
        taille: '1.75 m',
        dateDiagnostic: 'Décembre 2021',
        image: 'https://th.bing.com/th/id/OIP.xz2vdXtFZl5U-MuxfOHISQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7' 
      },
  ];

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    patient.surname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    // Navigate to the AddPatientScreen when the button is pressed
    navigation.navigate('AddPatientScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Patients</Text>
        </View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher des patients..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScrollView style={styles.patientList}>
        {filteredPatients.map((patient) => (
          <DoctorItem
            key={patient.id}
            doctor={patient} // Pass patient data to the DoctorItem
          />
        ))}
      </ScrollView>

      {/* Floating "Add Patient" button */}
      <TouchableOpacity style={styles.addPatientButton} onPress={handleAddPatient}>
        <Icon name="plus" size={35} color="#fff" /> {/* Increased size */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    backgroundColor: '#007bff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  patientList: {
    flex: 1,
    padding: 16,
  },
  addPatientButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#007bff', // App's theme color
    borderRadius: 10,
    padding: 15, // Adjusted padding
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PatientScreen;
