// NotificationScreen.js (updated)
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header'; // Import the Header component

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Rendez-vous avec le patient demain à 10h.", time: '2 hours ago' },
    { id: 2, message: "Nouveau message reçu de votre patient.", time: '1 day ago' },
    { id: 3, message: "Traitement mis à jour pour un de vos patients.", time: '3 days ago' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    setNotifications(notifications.filter((notification) => notification.id!== id));
  };

  const filteredNotifications = notifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationText}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      <Pressable
        onPress={() =>
          Alert.alert(
            'Supprimer',
            'Êtes-vous sûr de vouloir supprimer cette notification?',
            [
              { text: 'Annuler', style: 'cancel' },
              { text: 'Supprimer', onPress: () => handleDelete(item.id) },
            ]
          )
        }
        style={styles.deleteButton}
      >
        <Icon name="trash" size={20} color="#fff" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Notifications" />
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher des notifications..."
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Notification List */}
      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotification}
        contentContainerStyle={styles.content}
        ListEmptyComponent={
          <Text style={styles.noNotificationsText}>Aucune notification trouvée.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    marginHorizontal: 16,
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  deleteButton: {
    marginLeft: 12,
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 4,
  },
  noNotificationsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ccc',
    marginTop: 20,
  },
});

export default NotificationScreen;