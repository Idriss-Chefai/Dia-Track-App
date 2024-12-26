import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Picker, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header'; // Import the Header component

const AddPatientScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [sex, setSex] = useState('M');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  
  const [diabetesType, setDiabetesType] = useState('');
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  const [monthDiagnostic, setMonthDiagnostic] = useState('');
  const [yearDiagnostic, setYearDiagnostic] = useState('');

  const handleSubmit = () => {
    const newUser = {
      name,
      surname,
      sex,
      phone,
      birthDate,
      email,
    };

    const newPatient = {
      diabetesType,
      poids,
      taille,
      monthDiagnostic,
      yearDiagnostic,
    };

    console.log('New User:', newUser);
    console.log('New Patient:', newPatient);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header title="Ajouter un Patient" />
        
        <Text style={styles.sectionTitle}>Informations Personnelles</Text>

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
        
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Sexe</Text>
          <Picker
            selectedValue={sex}
            onValueChange={(itemValue) => setSex(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Homme" value="M" />
            <Picker.Item label="Femme" value="F" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Numéro de téléphone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Date de naissance"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <Text style={styles.sectionTitle}>Informations Médicales</Text>

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
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Taille (m)"
          value={taille}
          onChangeText={setTaille}
          keyboardType="numeric"
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Mois du diagnostic</Text>
          <Picker
            selectedValue={monthDiagnostic}
            onValueChange={(itemValue) => setMonthDiagnostic(itemValue)}
            style={styles.picker}
          >
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
              <Picker.Item key={index} label={month} value={index + 1} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Année du diagnostic</Text>
          <Picker
            selectedValue={yearDiagnostic}
            onValueChange={(itemValue) => setYearDiagnostic(itemValue)}
            style={styles.picker}
          >
            {Array.from({ length: 30 }, (_, i) => 2023 - i).map((year) => (
              <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
        <Button title="Ajouter" onPress={handleSubmit} />
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.txt}>Fix</Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  txt:{
    color : 'white',
  },
  scrollContainer: {
    height : 500,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  buttonContainer: {
    marginBottom: 50, // Add marginBottom to give space between button and bottom screen
  },
});

export default AddPatientScreen;
