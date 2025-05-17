// App.tsx

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './Home';
import Config from './Config';
import Perfil from './Perfil';


// Tela Settings
function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Tela Profile
function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home', // Texto da aba
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Config"
            component={Config}
            options={{
              tabBarLabel: 'Tools', // Texto da aba
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="tools" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              tabBarLabel: 'Perfil', // Texto da aba
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="face-man" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


