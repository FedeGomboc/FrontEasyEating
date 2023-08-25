import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapaScreen from "../screens/MapaScreen";

function MapaStackScreen() {

    const MapaStack = createNativeStackNavigator()  

    return (
        <MapaStack.Navigator>
            <MapaStack.Screen name="Mapa" component={MapaScreen}></MapaStack.Screen>
        </MapaStack.Navigator>
    )
}

export default MapaStackScreen
