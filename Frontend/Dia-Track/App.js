import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs';
import PatientInfoScreen from './screens/PatientInfoScreen';
import AddPatientScreen from './screens/AddPatientScreen';
import NotificationScreen from './screens/NotificationScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import TreatmentScreen from './screens/TreatmentScreen';
import ChatScreen from './screens/ChatScreen';
import SplashScreen from './screens/SplashScreen'; // Import your custom splash screen

const Stack = createStackNavigator();

const App = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    // After 3 seconds, hide the splash screen and show the main app
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 5000); // Adjust the duration as needed

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSplashScreenVisible ? 'Splash' : 'Main'}>
        {/* Display the Splash screen first */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* Main app navigation after the splash screen */}
        <Stack.Screen 
          name="Main" 
          component={BottomTabs} 
          options={{ headerShown: false }} 
        />
        
        {/* Other screens */}
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
          name="AppointmentScreen" 
          component={AppointmentScreen} 
          options={{ headerShown: false, title: "Appointment" }} 
        />
        <Stack.Screen 
          name="TreatmentScreen" 
          component={TreatmentScreen} 
          options={{ headerShown: false, title: "Treatment" }} 
        />
        <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
          options={{ headerShown: false, title: "Chat" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
