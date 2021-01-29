import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({title, onPress }) {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onPress}>
            
            <Text style={styles.text}>{title}</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6a9c78',
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,

    },
    text: {
        color: '#fff',
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: "bold",

    }
})

export default AppButton;