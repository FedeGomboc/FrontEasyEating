import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import PruebaScreen from "../screens/PruebaScreen";

const LoginStackScreen = () => {
  const LoginStack = createNativeStackNavigator();

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login1" component={LoginScreen} />
      <LoginStack.Screen name="Prueba" component={PruebaScreen} />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
