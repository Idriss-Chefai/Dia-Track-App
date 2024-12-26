import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { countPatients } from '../services/patientService'; // Adjust the import path as necessary
import { countRendezVous, getRendezVous } from '../services/rendezVousService'; // Adjust the import path as necessary

const screenWidth = Dimensions.get('window').width;

const DashboardScreen = ({ navigation }) => {
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [appointmentsData, setAppointmentsData] = useState([]);

  // Mock data for patient age distribution
  const mockPatientAgeDistributionData = {
    labels: ['0-10', '11-30', '31-50', '51-70', '71-80', '81-90', '91+'],
    datasets: [
      {
        data: [5, 10, 15, 20, 15, 10, 5],
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientCountData = await countPatients();
        setPatientCount(patientCountData.count);

        const appointmentCountData = await countRendezVous();
        setAppointmentCount(appointmentCountData.count);

        const appointments = await getRendezVous();
        console.log('Appointments Data:', appointments); // Log the appointments data
        if (Array.isArray(appointments)) {
          setAppointmentsData(appointments);
        } else {
          console.error('Appointments data is not an array:', appointments);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to generate chart data for appointments
  const generateChartData = (appointments) => {
    const labels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
    const data = labels.map(label => {
      const count = appointments.filter(appointment => {
        const dayOfWeek = new Date(appointment.date).getDay();
        return dayOfWeek === labels.indexOf(label) + 1; // Adjust index to match day of week (1 = Monday, 2 = Tuesday, etc.)
      }).length;
      return count;
    });
    return { labels, datasets: [{ data }] };
  };

  const chartData = generateChartData(appointmentsData);

  return (
    <View style={styles.container}>
      {/* Header Section with Settings Icon */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tableau de bord</Text>
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="settings" size={24} color="#007bff" />
        </Pressable>
      </View>

      <ScrollView>
        {/* Overview Section */}
        <View style={styles.overviewSection}>
          <Text style={styles.sectionHeader}>Vue d'ensemble</Text>
          <View style={styles.statsContainer}>
            {/* Patients Container */}
            <View style={styles.statBox}>
              <Icon name="users" size={24} color="#007bff" />
              <Text style={styles.statValue}>{patientCount}</Text>
              <Text style={styles.statLabel}>Patients</Text>
            </View>
            {/* Appointments Container */}
            <View style={styles.statBox}>
              <Icon name="calendar" size={24} color="#007bff" />
              <Text style={styles.statValue}>{appointmentCount}</Text>
              <Text style={styles.statLabel}>Rendez-vous</Text>
            </View>
            {/* Notifications Container */}
            <View style={styles.statBox}>
              <Icon name="bell" size={24} color="#007bff" />
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Notifications</Text>
            </View>
          </View>
        </View>

        {/* Graphs Section */}
        <View style={styles.graphsSection}>
          <Text style={styles.sectionHeader}>Distribution d'âge des patients</Text>
          <BarChart
            data={mockPatientAgeDistributionData}
            width={screenWidth - 32} // Minus padding
            height={200}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#f2f2f2',
              backgroundGradientTo: '#e0e0e0',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              barPercentage: 0.5,
            }}
            style={styles.graph}
          />

          <Text style={styles.sectionHeader}>Aperçu des rendez-vous</Text>
          <BarChart
            data={chartData}
            width={screenWidth - 32} // Ensure the width is correctly set
            height={200}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#f2f2f2',
              backgroundGradientTo: '#e0e0e0',
              decimalPlaces: 0, // Ensure decimal places are set to 0
              color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              barPercentage: 0.5,
            }}
            style={styles.graph}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  overviewSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#666',
  },
  graphsSection: {
    marginBottom: 24,
  },
  graph: {
    marginVertical: 8,
    borderRadius: 10,
  },
});

export default DashboardScreen;