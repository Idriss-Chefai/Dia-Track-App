import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather"; // For tab icons
import DashboardScreen from "../screens/DashboardScreen";
import ChatScreen from "../screens/ChatScreen";
import CalendarScreen from "../screens/CalendarScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PatientScreen from "../screens/PatientScreen"; // Added PatientScreen

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff", // White background for the tabs
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          borderTopWidth: 0,
          elevation: 5,
          position: "absolute",
          overflow: "hidden",
        },
        tabBarActiveTintColor: "#007bff", // Light blue for active icons
        tabBarInactiveTintColor: "#b3d9ff", // Lighter blue for inactive icons
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Acceuil"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Patients"
        component={PatientScreen} // Added PatientScreen to BottomTabs
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" color={color} size={size} />
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
        name="Calendrier"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
