import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const StartNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Listings" component={ListingScreen} options={{ headerShown: false }}/>

    </Stack.Navigator>
);

export default StartNavigator;