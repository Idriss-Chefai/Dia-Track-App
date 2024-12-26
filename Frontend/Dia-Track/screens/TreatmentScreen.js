// TraitementScreen.js (modified)
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import Header from '../components/Header'; // Import your custom Header component

const TreatementScreen = () => {
  const [traitement, setTraitement] = useState([]);
  const [newTraitement, setNewTraitement] = useState({
    type_traitement: '',
    medicament: '',
    dosage: '',
  });

  const handleAdd = () => {
    // Simulating addition; replace with actual database insert logic
    setTraitement([...traitement, newTraitement]);
    setNewTraitement({ type_traitement: '', medicament: '', dosage: '' });
    Alert.alert('Succès', 'Traitement ajouté');
    console.log('New Traitement Added:', newTraitement);
  };

  return (
    <View style={styles.container}>
      <Header title="Traitement" />
      <Text style={styles.headerText}>Liste des traitements:</Text>
      <FlatList
        data={traitement}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.traitementItem}>
            <Text>Type: {item.type_traitement}</Text>
            <Text>Médicament: {item.medicament}</Text>
            <Text>Dosage: {item.dosage}</Text>
          </View>
        )}
      />
      <Text style={styles.label}>Ajouter un nouveau traitement:</Text>
      <Text style={styles.subLabel}>Type de traitement:</Text>
      <TextInput
        style={styles.input}
        value={newTraitement.type_traitement}
        onChangeText={(text) => setNewTraitement({...newTraitement, type_traitement: text })}
      />
      <Text style={styles.subLabel}>Médicament:</Text>
      <TextInput
        style={styles.input}
        value={newTraitement.medicament}
        onChangeText={(text) => setNewTraitement({...newTraitement, medicament: text })}
      />
      <Text style={styles.subLabel}>Dosage:</Text>
      <TextInput
        style={styles.input}
        value={newTraitement.dosage}
        onChangeText={(text) => setNewTraitement({...newTraitement, dosage: text })}
      />
      <Button title="Ajouter" onPress={handleAdd} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerText: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  traitementItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  label: { fontSize: 16, marginBottom: 4 },
  subLabel: { fontSize: 14, color: '#666', marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default TreatementScreen;