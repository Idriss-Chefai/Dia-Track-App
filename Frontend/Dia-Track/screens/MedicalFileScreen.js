// DossierMedicalScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import Header from '../components/Header'; // Import your custom Header component

const MedicalFileScreen = () => {
  const [dossierMedical, setDossierMedical] = useState({
    type_diabete: '',
    poids: '',
    taille: '',
    mois_diagnostic: '',
    annee_diagnostic: '',
  });

  const handleUpdate = () => {
    // Simulating update; replace with actual database update logic
    Alert.alert('Succès', 'Dossier médical mis à jour');
    // TO DO: Implement backend call to update dossier medical
    // using dossierMedical state object
    console.log('Updated Dossier Medical:', dossierMedical);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Dossier Médical" style={styles.header}/>
      <Text style={styles.labell}>Type de diabète:</Text>
      <TextInput
        style={styles.input}
        value={dossierMedical.type_diabete}
        onChangeText={(text) => setDossierMedical({...dossierMedical, type_diabete: text })}
      />
      <Text style={styles.label}>Poids (kg):</Text>
      <TextInput
        style={styles.input}
        value={dossierMedical.poids}
        onChangeText={(text) => setDossierMedical({...dossierMedical, poids: text })}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Taille (m):</Text>
      <TextInput
        style={styles.input}
        value={dossierMedical.taille}
        onChangeText={(text) => setDossierMedical({...dossierMedical, taille: text })}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Mois de diagnostic:</Text>
      <TextInput
        style={styles.input}
        value={dossierMedical.mois_diagnostic}
        onChangeText={(text) => setDossierMedical({...dossierMedical, mois_diagnostic: text })}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Année de diagnostic:</Text>
      <TextInput
        style={styles.input}
        value={dossierMedical.annee_diagnostic}
        onChangeText={(text) => setDossierMedical({...dossierMedical, annee_diagnostic: text })}
        keyboardType="numeric"
      />
      <Button title="Mettre à jour" onPress={handleUpdate} color="#007bff" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 16, marginBottom : 8},
  labell: { fontSize: 16, marginTop : 50},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default MedicalFileScreen;