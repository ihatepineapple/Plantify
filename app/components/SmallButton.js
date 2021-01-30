import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({title, onPress, color = "#6a9c78"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]}
            onPress={onPress}>
            
            <Text style={styles.text}>{title}</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6a9c78',
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        paddingHorizontal: 45,
        width: "100%",
        marginVertical: 10,

    },
    text: {
        color: '#fff',
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",

    }
})

export default AppButton;