import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import Boton from "../components/Boton.jsx";
import Titulo from "../components/Titulo.jsx";

const condicionScreen = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
        
        // 👇️ or set to true
        // setIsActive(true);
      };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Cual es tu condición?</Text>

        <Boton green contenido="Hola" onPress={handleClick}/>
        

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 5,
    textAlign: "center",
    fontFamily: "Fredoka SemiBold",
  },

  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 11.5,
    fontFamily: "Inter Regular",
    borderRadius: 10,
  },

  container: {
    padding: 80,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },
});

export default condicionScreen;
