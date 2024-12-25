import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs'; // Import the BottomTabs component
import PatientInfoScreen from './screens/PatientInfoScreen';
import AddPatientScreen from './screens/AddPatientScreen'; // Import the AddPatientScreen
import NotificationScreen from './screens/NotificationScreen'; // Import NotificationScreen
import AppointmentScreen from './screens/AppointmentScreen'; // Import AppointmentScreen
import TreatmentScreen from './screens/TreatmentScreen'; // Import TreatmentScreen
import ChatScreen from './screens/ChatScreen'; // Import ChatScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* BottomTabs is the entry point */}
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        
        {/* PatientInfoScreen can still be accessed via Stack navigation */}
        <Stack.Screen name="PatientInfo" component={PatientInfoScreen} options={{ headerShown: false }} />
        
        {/* Add the AddPatientScreen to the stack */}
        <Stack.Screen name="AddPatientScreen" component={AddPatientScreen} options={{ headerShown: true, title: "Ajouter un patient" }} />
        
        {/* Add the NotificationScreen to the stack */}
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: true, title: "Notifications" }} />

        {/* Add the AppointmentScreen, TreatmentScreen, and ChatScreen */}
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} options={{ title: "Appointment" }} />
        <Stack.Screen name="TreatmentScreen" component={TreatmentScreen} options={{ title: "Treatment" }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: "Chat" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
