import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStackScreen from "./stacks/LoginStackScreen";
import PerfilStackScreen from "./stacks/PerfilStackScreen";
import MapaStackScreen from "./stacks/MapaStackScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="LoginMenu" component={LoginStackScreen} />
        <Tab.Screen name="MapaMenu" component={MapaStackScreen} />
        <Tab.Screen name="PerfilMenu" component={PerfilStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
