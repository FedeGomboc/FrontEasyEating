import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStackScreen from "./stacks/LoginStackScreen";
import PerfilStackScreen from "./stacks/PerfilStackScreen";
import MapaStackScreen from "./stacks/MapaStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import EscanerStackScreen from "./stacks/EscanerStackScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="LoginMenu" component={LoginStackScreen} />
        <Tab.Screen name="MapaMenu" component={MapaStackScreen} options={{tabBarLabel: 'Mapa', tabBarIcon: () => (<FontAwesome5 name="map-marked-alt" size={24} color="black"/>)}}/>
        <Tab.Screen name="EscanerMenu" component={EscanerStackScreen} options={{tabBarLabel: 'Escaner', tabBarIcon: () => (<MaterialCommunityIcons name="barcode-scan" size={24} color="black" />)}}/>
        <Tab.Screen name="PerfilMenu" component={PerfilStackScreen} options={{tabBarLabel: 'Perfil', tabBarIcon: () => (<Ionicons name="person" size={24} color="black" />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
