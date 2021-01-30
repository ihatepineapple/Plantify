import React, { Text } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import CollectionNavigator from "./CollectionNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            labelStyle: {
                fontSize: 14,
            },
            style: {
                height: 90
            }
        }}>
        <Tab.Screen
        name="Browse All"
        component={FeedNavigator}
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="leaf" color={color} size={size} /> 
            )
        }}
        />

        <Tab.Screen
        name="My Collection"
        component={CollectionNavigator}
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="heart" color={color} size={size} /> 
            ),
        
        }}
        />

    </Tab.Navigator>


);


export default AppNavigator;