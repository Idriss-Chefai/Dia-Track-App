import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./components/BottomTabs";
import PatientInfoScreen from "./screens/PatientInfoScreen";
import AddPatientScreen from "./screens/AddPatientScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import TreatmentScreen from "./screens/TreatmentScreen";
import ChatScreen from "./screens/ChatScreen";
import SplashScreen from "./screens/SplashScreen"; // Import your custom splash screen
import DashboardScreen from "./screens/DashboardScreen";
import PatientScreen from "./screens/PatientScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MedicalFileScreen from "./screens/MedicalFileScreen";
const Stack = createStackNavigator();

const App = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isSplashScreenVisible ? "Splash" : "Main"}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientList"
          component={PatientScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientInfo"
          component={PatientInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddPatientScreen"
          component={AddPatientScreen}
          options={{ headerShown: false, title: "Ajouter un patient" }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false, title: "Notifications" }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false, title: "Chat" }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false, title: "Chat" }}
        />
        <Stack.Screen
          name="MedicalFileScreen"
          component={MedicalFileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TreatmentScreen"
          component={TreatmentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppointmentsScreen"
          component={AppointmentScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
