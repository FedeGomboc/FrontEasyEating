import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import PruebaScreen from "../screens/PruebaScreen";
import OnBoarding1 from "../screens/OnBoarding1";

const LoginStackScreen = () => {
  const LoginStack = createNativeStackNavigator();

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="OnBoarding1" component={OnBoarding1} />
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Prueba" component={PruebaScreen} />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
