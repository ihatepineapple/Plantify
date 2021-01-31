import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from './app/navigation/navigationTheme';
import StartNavigator from "./app/navigation/StartNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StartNavigator />
    </NavigationContainer>
    // <ListingScreen />
    
  );
}

const styles = StyleSheet.create({
  
});
