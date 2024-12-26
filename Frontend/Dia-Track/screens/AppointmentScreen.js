import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Header from '../components/Header'; // Import the Header component

const AppointmentScreen = ({ route, navigation }) => {
  const { patient } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Add the header component */}
      <Header title="Schedule Appointment" />

      <Text style={styles.details}>Patient: {patient.name} {patient.surname}</Text>
      <Text style={styles.details}>Type: {patient.diabetesType}</Text>
      <Text style={styles.details}>Diagnosed: {patient.dateDiagnostic}</Text>
      
      {/* You can add form fields or other content for scheduling the appointment */}
      <Button title="Confirm Appointment" onPress={() => { /* Handle appointment scheduling */ }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  details: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default AppointmentScreen;
