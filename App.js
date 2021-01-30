import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <ListingScreen />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
