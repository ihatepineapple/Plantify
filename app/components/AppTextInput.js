import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function AppTextInput({ icon, color, width = "100%", ...otherProps }) {
    return (
        <View style={ [styles.container,  {width}] }>
            {icon && (
                <MaterialCommunityIcons
                name={icon}
                size={20}
                color={color}
                style={styles.icon}
                />
            )}
            <TextInput 
            placeholderTextColor={color}
            { ...otherProps }/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    
})

export default AppTextInput;