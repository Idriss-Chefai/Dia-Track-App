import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoctorItem from '../components/DoctorItem'; // Assuming this component is the one that displays patient details
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import Header from '../components/Header'; // Import the Header component
import { getPatients } from '../services/patientService'; // Import the getPatients function

const PatientScreen = () => {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const fetchPatients = async () => {
        try {
          const fetchedPatients = await getPatients();
          if (Array.isArray(fetchedPatients)) {
            setPatients(fetchedPatients);
          } else {
            console.error('La réponse de l\'API n\'est pas un tableau:', fetchedPatients);
            setError('La réponse de l\'API n\'est pas un tableau');
          }
        } catch (error) {
          console.error('Erreur lors du chargement des patients:', error);
          setError('Erreur lors du chargement des patients');
        } finally {
          setLoading(false);
        }
      };

      fetchPatients();

      // Return a cleanup function if needed
      return () => {
        // Cleanup logic here if necessary
      };
    }, []) // Empty dependency array to run only once on focus
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredPatients = patients.filter((patient) =>
    (patient.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
    (patient.surname?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    navigation.navigate('AddPatientScreen');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Patients" />
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher des patients..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <ScrollView style={styles.patientList}>
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <DoctorItem
              key={patient.patient_id}
              doctor={patient}
            />
          ))
        ) : (
          <Text style={styles.noPatientsText}>Aucun patient trouvé</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.addPatientButton} onPress={handleAddPatient}>
        <Icon name="plus" size={35} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
    marginHorizontal: 16,
    marginTop: 16,
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
    marginBottom: 40,
    marginTop: 20,
  },
  noPatientsText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
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