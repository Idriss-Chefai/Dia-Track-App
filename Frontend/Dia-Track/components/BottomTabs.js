import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'; // For tab icons
import PatientScreen from '../screens/PatientScreen'; // Adjust the path based on your structure
import ChatScreen from '../screens/ChatScreen'; // Placeholder
import ProfileScreen from '../screens/ProfileScreen'; // Placeholder
import CalendarScreen from '../screens/CalendarScreen'; // Placeholder
import NotificationScreen from '../screens/NotificationScreen'; // New notification screen

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff', // White background for the tabs
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          borderTopWidth: 0,
          elevation: 5,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarActiveTintColor: '#007bff', // Light blue for active icons
        tabBarInactiveTintColor: '#b3d9ff', // Lighter blue for inactive icons
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Acceuil"
        component={PatientScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messagerie"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="message-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendrier"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      {/* Add the Notifications tab */}
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen} // New screen for notifications
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} /> // Notification icon
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
