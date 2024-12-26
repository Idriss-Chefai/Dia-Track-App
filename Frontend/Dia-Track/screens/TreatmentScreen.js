import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header'; // Import the Header component

const TreatmentScreen = ({ route, navigation }) => {
  const { patient } = route.params;

  return (
    <View style={styles.container}>
      <Header 
        title="Treatment Details"
      />
      <Text style={styles.details}>Patient: {patient.name} {patient.surname}</Text>
      <Text style={styles.details}>Type: {patient.diabetesType}</Text>
      <Text style={styles.details}>Diagnosed: {patient.dateDiagnostic}</Text>

      <Button title="View Treatment History" onPress={() => { /* Handle treatment view */ }} />
    </View>
  );
};

// Styles remain the same


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default TreatmentScreen;
