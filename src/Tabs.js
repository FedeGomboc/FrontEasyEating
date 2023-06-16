import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStackScreen from "./stacks/LoginStackScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="LoginMenu" component={LoginStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
