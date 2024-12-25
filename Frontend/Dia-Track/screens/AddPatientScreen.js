import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AddPatientScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [diabetesType, setDiabetesType] = useState('');
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  const [dateDiagnostic, setDateDiagnostic] = useState('');

  const handleSubmit = () => {
    // Here you can handle the form submission, e.g., send the data to your back-end
    const newPatient = {
      name,
      surname,
      diabetesType,
      poids,
      taille,
      dateDiagnostic,
    };

    console.log('New Patient:', newPatient);
    // After submitting, you can navigate back or show a success message
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un patient</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Type de diabète"
        value={diabetesType}
        onChangeText={setDiabetesType}
      />
      <TextInput
        style={styles.input}
        placeholder="Poids (kg)"
        value={poids}
        onChangeText={setPoids}
      />
      <TextInput
        style={styles.input}
        placeholder="Taille (m)"
        value={taille}
        onChangeText={setTaille}
      />
      <TextInput
        style={styles.input}
        placeholder="Date du diagnostic"
        value={dateDiagnostic}
        onChangeText={setDateDiagnostic}
      />
      
      <Button title="Ajouter" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
});

export default AddPatientScreen;
