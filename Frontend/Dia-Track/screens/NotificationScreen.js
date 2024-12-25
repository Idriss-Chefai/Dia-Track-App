import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NotificationScreen = () => {
  const notifications = [
    { id: 1, message: "Rendez-vous avec le patient demain à 10h." },
    { id: 2, message: "Nouveau message reçu de votre patient." },
    { id: 3, message: "Traitement mis à jour pour un de vos patients." },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <ScrollView>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Text style={styles.notificationText}>{notification.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationScreen;
