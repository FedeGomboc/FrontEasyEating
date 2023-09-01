import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EscanerScreen from "../screens/EscanerScreen";

const EscanerStackScreen = () => {
    const EscanerStack = createNativeStackNavigator();

    return (
        <EscanerStack.Navigator>
            <EscanerStack.Screen name="Escaner" component={EscanerScreen}/>
        </EscanerStack.Navigator>
    )
}

export default EscanerStackScreen