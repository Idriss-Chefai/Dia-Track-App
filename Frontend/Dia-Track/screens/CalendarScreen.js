import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [appointments, setAppointments] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newAppointment, setNewAppointment] = useState('');

  // Open modal to add appointment
  const openModal = (date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  // Add a new appointment
  const addAppointment = () => {
    if (newAppointment.trim() === '') return;
    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [selectedDate]: [...(prevAppointments[selectedDate] || []), newAppointment],
    }));
    setNewAppointment('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Calendar</Text>
      <Calendar
        style={styles.calendar}
        markedDates={{
          ...Object.keys(appointments).reduce((acc, date) => {
            acc[date] = { marked: true };
            return acc;
          }, {}),
        }}
        onDayPress={(day) => openModal(day.dateString)}
        theme={{
          todayTextColor: '#007bff',
          arrowColor: '#007bff',
          selectedDayBackgroundColor: '#007bff',
          selectedDayTextColor: '#fff',
        }}
      />

      <View style={styles.appointmentsContainer}>
        <Text style={styles.subHeader}>Appointments for {selectedDate || 'Selected Date'}</Text>
        {appointments[selectedDate]?.length > 0 ? (
          <FlatList
            data={appointments[selectedDate]}
            keyExtractor={(item, index) => `${selectedDate}-${index}`}
            renderItem={({ item }) => <Text style={styles.appointmentItem}>{item}</Text>}
          />
        ) : (
          <Text style={styles.noAppointments}>No appointments for this day</Text>
        )}
      </View>

      {/* Modal for adding appointments */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Appointment</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter appointment details"
              value={newAppointment}
              onChangeText={setNewAppointment}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={addAppointment}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginVertical: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  appointmentsContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  noAppointments: {
    fontSize: 16,
    color: '#555',
  },
  appointmentItem: {
    fontSize: 16,
    color: '#333',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ff5252',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CalendarScreen;
