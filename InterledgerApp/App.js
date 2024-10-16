import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage'; 

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import React from 'react';
AppRegistry.registerComponent(appName, () => App);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
