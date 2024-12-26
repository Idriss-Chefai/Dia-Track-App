import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Header from "../components/Header"; // Import the Header component

const PatientInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { doctor } = route.params; // Access doctor data passed from previous screen

  const handleOptionPress = option => {
    // Navigate based on option
    switch (option) {
      case "message":
        navigation.navigate("ChatScreen"); // Example route
        break;
      case "dossier":
        navigation.navigate("MedicalFileScreen"); // Example route
        break;
      case "treatment":
        navigation.navigate("TreatmentScreen"); // Example route
        break;
      case "appointments":
        navigation.navigate("AppointmentsScreen"); // Example route
        break;
      default:
        break;
    }
  };

  // Sample data for the glycemic chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    datasets: [
      {
        data: [85, 90, 80, 95, 88, 92], // Glycemic data
        strokeWidth: 2 // Line thickness
      }
    ]
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Add Header component */}
      <Header title="Informations du Patient" />

      {/* Patient Info */}
      <View style={styles.patientInfo}>
        <Image source={{ uri: doctor.image }} style={styles.patientImage} />
        <Text
          style={styles.patientName}
        >{`${doctor.name} ${doctor.surname}`}</Text>
        <Text style={styles.patientSpecialty}>
          {doctor.specialty}
        </Text>
        <Text
          style={styles.patientDiabetesType}
        >{`Type de Diabète: ${doctor.diabetesType}`}</Text>
        <Text style={styles.patientDetails}>{`Poids: ${doctor.poids}`}</Text>
        <Text style={styles.patientDetails}>{`Taille: ${doctor.taille}`}</Text>
        <Text
          style={styles.patientDetails}
        >{`Diagnostiqué: ${doctor.dateDiagnostic}`}</Text>

        {/* Icons and Actions */}
        <View style={styles.actionIcons}>
          <TouchableOpacity onPress={() => handleOptionPress("message")}>
            <Icon name="message-square" size={30} color="#007bff" />
            <Text style={styles.iconText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress("dossier")}>
            <Icon name="file-text" size={30} color="#007bff" />
            <Text style={styles.iconText}>Dossier</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress("treatment")}>
            <Icon name="clipboard" size={30} color="#007bff" />
            <Text style={styles.iconText}>Traitements</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress("appointments")}>
            <Icon name="calendar" size={30} color="#007bff" />
            <Text style={styles.iconText}>Rendez-vous</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Glycemic Data Dashboard */}
      <View style={styles.dashboard}>
        <Text style={styles.dashboardTitle}>Données Glycémiques</Text>
        <LineChart
          data={data}
          width={screenWidth - 32} // Adjusting to fit the screen with padding
          height={200} // Increased the height for the chart
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Blue color
            labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#fff"
            }
          }}
          bezier
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 40 // Increased padding to avoid content being cut off
  },
  header: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
    marginLeft: 10
  },
  patientInfo: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 60
  },
  patientImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16
  },
  patientName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  patientSpecialty: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8
  },
  patientDiabetesType: {
    fontSize: 16,
    color: "#999",
    marginBottom: 16
  },
  patientDetails: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%"
  },
  dashboard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center"
  },
  dashboardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10
  },
  iconText: {
    fontSize: 12,
    color: "#007bff", // Matching the color of the icons
    marginTop: 5,
    textAlign: "center" // Centering the text under the icon
  }
});

export default PatientInfoScreen;
