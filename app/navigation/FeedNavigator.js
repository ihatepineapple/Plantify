import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Browse All" component={ListingScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;