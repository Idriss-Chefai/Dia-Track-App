// RendezVousScreen.js (modified)
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput
} from "react-native";
import Header from '../components/Header'; // Import your custom Header component

const AppointmentScreen = () => {
  const [rendezvous, setRendezvous] = useState([]);
  const [newRendezvous, setNewRendezvous] = useState({
    date: "",
    heure: "",
    address: ""
  });

  const handleAdd = () => {
    // Simulating addition; replace with actual database insert logic
    setRendezvous([...rendezvous, newRendezvous]);
    setNewRendezvous({ date: "", heure: "", address: "" });
    Alert.alert("Succès", "Rendez-vous ajouté");
    console.log('New Rendez-Vous Added:', newRendezvous);
  };

  return (
    <View style={styles.container}>
      <Header title="Rendez-Vous" />
      <Text style={styles.headerText}>Liste des rendez-vous:</Text>
      <FlatList
        data={rendezvous}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={styles.rendezvousItem}>
            <Text>
              Date: {item.date}
            </Text>
            <Text>
              Heure: {item.heure}
            </Text>
            <Text>
              Adresse: {item.address}
            </Text>
          </View>}
      />
      <Text style={styles.label}>Ajouter un nouveau rendez-vous:</Text>
      <Text style={styles.subLabel}>Date (YYYY-MM-DD):</Text>
      <TextInput
        style={styles.input}
        value={newRendezvous.date}
        onChangeText={text =>
          setNewRendezvous({...newRendezvous, date: text })}
      />
      <Text style={styles.subLabel}>Heure (HH:MM):</Text>
      <TextInput
        style={styles.input}
        value={newRendezvous.heure}
        onChangeText={text =>
          setNewRendezvous({...newRendezvous, heure: text })}
      />
      <Text style={styles.subLabel}>Adresse:</Text>
      <TextInput
        style={styles.input}
        value={newRendezvous.address}
        onChangeText={text =>
          setNewRendezvous({...newRendezvous, address: text })}
      />
      <Button title="Ajouter" onPress={handleAdd} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerText: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  rendezvousItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderColor: "#ccc",
    borderWidth: 1
  },
  label: { fontSize: 16, marginBottom: 4 },
  subLabel: { fontSize: 14, color: "#666", marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff"
  }
});

export default AppointmentScreen;