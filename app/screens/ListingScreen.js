import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from "../components/Card";
import Screen from "../components/Screen"

function ListingScreen(props) {
  return (
    <Screen style={styles.container}>
        <Card
          title="coconut palm"
          subtitle="Cocos nucifera"
          />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#f9f8ed", 
      padding: 20,
  }
});

export default ListingScreen;