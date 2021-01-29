import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import AppButton from '../components/AppButton';

import AppText from "../components/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
        <View style={styles.container}>
            <Image source={require('../assets/logo-white.png')} />
            <AppText style={styles.title}>Your plant catalog app.</AppText>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="Start" />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginTop: 10,
    },
    container: {
        position: 'absolute',
        top: 360,
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
        bottom: 50,
    }
});

export default WelcomeScreen;