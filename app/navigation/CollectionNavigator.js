import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CollectionScreen from "../screens/CollectionScreen";

const Stack = createStackNavigator();

const CollectionNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Collection" component={CollectionScreen} />
    </Stack.Navigator>
);

export default CollectionNavigator;