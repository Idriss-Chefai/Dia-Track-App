// AppointmentScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AppointmentScreen = ({ route, navigation }) => {
  const { patient } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule Appointment</Text>
      <Text style={styles.details}>Patient: {patient.name} {patient.surname}</Text>
      <Text style={styles.details}>Type: {patient.diabetesType}</Text>
      <Text style={styles.details}>Diagnosed: {patient.dateDiagnostic}</Text>
      
      {/* You can add form fields or other content for scheduling the appointment */}
      <Button title="Confirm Appointment" onPress={() => { /* Handle appointment scheduling */ }} />
    </View>
  );
};

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

export default AppointmentScreen;
