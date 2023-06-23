import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import InicioSesionScreen from "../screens/InicioSesionScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import RegistrarseScreen from "../screens/RegistrarseScreen";

const LoginStackScreen = () => {
  const LoginStack = createNativeStackNavigator();

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Inicio Sesión" component={InicioSesionScreen} />
      <LoginStack.Screen name="Registrarse" component={RegistrarseScreen} />
      <LoginStack.Screen name="On Boarding" component={OnBoardingScreen} />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
