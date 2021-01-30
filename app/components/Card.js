import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import SmallButton from './SmallButton';

import AppText from "./AppText"


function Card({title, subtitle, imageUrl, onPress}) {
    return (
     
        <View style={styles.card}>
            <Image style={styles.image} source={imageUrl} />
            {/* <Image style={styles.image} source={{ uri: imageUrl }} /> */}
            <View style={styles.infoContainer}>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subtitle} numberOfLines={1}>{subtitle}</AppText>
                </View>
                <View style={styles.buttonContainer}>
                    <SmallButton title="Add" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subtitle: {
        fontStyle: "italic", 
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    infoContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        justifyContent: "center",
        left: 70,
       
    }
})

export default Card;