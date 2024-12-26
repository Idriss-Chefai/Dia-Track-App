import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from "react-native";
import Header from '../components/Header'; // Import your custom Header component
import { createRendezVous, getRendezVous, deleteRendezVous } from "../services/rendezVousService"; // Import the service functions
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const AppointmentScreen = ({ navigation }) => {
  const [rendezvous, setRendezvous] = useState([]);
  const [newRendezvous, setNewRendezvous] = useState({
    date: "",
    heure: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getRendezVous();
      setRendezvous(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des rendez-vous:', error);
      Alert.alert("Erreur", "Impossible de récupérer les rendez-vous");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newRendezvous.date) newErrors.date = "Date est requise";
    if (!newRendezvous.heure) newErrors.heure = "Heure est requise";
    if (!newRendezvous.address) newErrors.address = "Adresse est requise";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const rendezVousData = {
        id_patient: 2, // Replace with actual patient ID
        date: newRendezvous.date,
        heure: newRendezvous.heure,
        address: newRendezvous.address,
      };
      console.log('Rendez-vous Data:', rendezVousData); // Debugging line
      await createRendezVous(rendezVousData);
      setNewRendezvous({ date: "", heure: "", address: "" });
      setErrors({});
      Alert.alert("Succès", "Rendez-vous ajouté");
      fetchAppointments(); // Refresh the list of appointments
    } catch (error) {
      console.error('Erreur lors de l\'ajout du rendez-vous:', error);
      Alert.alert("Erreur", "Impossible d'ajouter le rendez-vous");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRendezVous(id);
      Alert.alert("Succès", "Rendez-vous supprimé");
      fetchAppointments(); // Refresh the list of appointments
    } catch (error) {
      console.error('Erreur lors de la suppression du rendez-vous:', error);
      Alert.alert("Erreur", "Impossible de supprimer le rendez-vous");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Rendez-Vous" />
      <KeyboardAvoidingView
        style={styles.contentContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.listContainer}>
            <Text style={styles.headerText}>Liste des rendez-vous:</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#007bff" style={styles.activityIndicator} />
            ) : (
              <FlatList
                data={rendezvous}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.rendezvousItem}>
                    <View style={styles.rendezvousInfo}>
                      <Text>
                        Date: {item.date}
                      </Text>
                      <Text>
                        Heure: {item.heure}
                      </Text>
                      <Text>
                        Adresse: {item.address}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDelete(item.id)}>
                      <Icon name="trash" size={24} color="#ff5252" />
                    </TouchableOpacity>
                  </View>
                )}
                contentContainerStyle={styles.flatListContentContainer}
              />
            )}
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Ajouter un nouveau rendez-vous:</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.subLabel}>Date (YYYY-MM-DD):</Text>
              <TextInput
                style={styles.input}
                value={newRendezvous.date}
                onChangeText={text => setNewRendezvous({ ...newRendezvous, date: text })}
              />
              {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.subLabel}>Heure (HH:MM):</Text>
              <TextInput
                style={styles.input}
                value={newRendezvous.heure}
                onChangeText={text => setNewRendezvous({ ...newRendezvous, heure: text })}
              />
              {errors.heure && <Text style={styles.errorText}>{errors.heure}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.subLabel}>Adresse:</Text>
              <TextInput
                style={styles.input}
                value={newRendezvous.address}
                onChangeText={text => setNewRendezvous({ ...newRendezvous, address: text })}
              />
              {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
            </View>
            <Button title="Ajouter" onPress={handleAdd} color="#007bff" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    height : 500,
  },
  listContainer: {
    flex: 1,
    marginBottom: 16,
    marginTop: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: '#007bff',
  },
  rendezvousItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rendezvousInfo: {
    flex: 1,
  },
  deleteIcon: {
    padding: 5,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#007bff',
  },
  subLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
});

export default AppointmentScreen;