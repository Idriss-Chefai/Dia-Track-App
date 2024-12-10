import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Components/ProfileScreen';
import CustomHeader from './Components/CustomHeader';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Profile" />,
          })}
        />
        <Stack.Screen
          name="Favorite"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Favorite" />,
          })}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Payment Method" />,
          })}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Privacy Policy" />,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Settings" />,
          })}
        />
        <Stack.Screen
          name="Help"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Help" />,
          })}
        />
        <Stack.Screen
          name="Logout"
          component={ProfileScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Logout" />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;