import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, RefreshControl } from 'react-native'; // Ensure FlatList and RefreshControl are imported
import { Calendar } from 'react-native-calendars';
import Header from '../components/Header'; // Import the Header component
import { getRendezVous } from "../services/rendezVousService";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [appointments, setAppointments] = useState({});
  const [allAppointments, setAllAppointments] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch appointments
  const fetchAppointments = async () => {
    setIsRefreshing(true);
    try {
      const response = await getRendezVous();
      const appointmentsData = response.data.reduce((acc, rendezVous) => {
        const date = rendezVous.date.split('T')[0]; // Extract date part from ISO string
        if (!acc[date]) acc[date] = [];
        acc[date].push(rendezVous);
        return acc;
      }, {});
      setAppointments(appointmentsData);
      setAllAppointments(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des rendez-vous:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Use useEffect to fetch appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Use useFocusEffect to fetch appointments when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      fetchAppointments();
      return () => {}; // Cleanup function
    }, [])
  );

  // Open modal to add appointment
  const openModal = (date) => {
    setSelectedDate(date);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={fetchAppointments}
        />
      }
    >
      {/* Add the header component */}
      <Header title="Votre Calendrier" />

      <Calendar
        style={styles.calendar}
        markedDates={{
          ...Object.keys(appointments).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: '#007bff' }; // Add colorful dots
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
        <Text style={styles.subHeader}>Rendez-vous pour {selectedDate || 'Date sélectionnée'}</Text>
        {appointments[selectedDate]?.length > 0 ? (
          <FlatList
            data={appointments[selectedDate]}
            keyExtractor={(item, index) => `${selectedDate}-${index}`}
            renderItem={({ item }) => (
              <Text style={styles.appointmentItem}>
                {item.address} à {item.heure}
              </Text>
            )}
          />
        ) : (
          <Text style={styles.noAppointments}>Aucun rendez-vous pour cette journée</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa',
    padding: 10,
  },
  calendar: {
    marginBottom: 20,
    marginTop: 50,
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
});

export default CalendarScreen;