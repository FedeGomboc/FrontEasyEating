import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PerfilScreen from "../screens/PerfilScreen";

const PerfilStackScreen = () => {
    const PerfilStack = createNativeStackNavigator();

    return (
        <PerfilStack.Navigator>
            <PerfilStack.Screen name="Perfil" component={PerfilScreen}/>
        </PerfilStack.Navigator>
    )
}

export default PerfilStackScreen