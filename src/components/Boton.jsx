import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Pressable,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

const Boton = ({green, mustard,  contenido}) => {

  const [fuentesCargadas] = useFonts({
    "Inter Regular": require("../assets/fonts/Inter-Regular.ttf"),
  })
  if (!fuentesCargadas) {
    return null
  }

  const botonStyles = [
    styles.boton,
    green && styles.green,
    mustard && styles.mustard
  ]

  return (
    <TouchableOpacity style={botonStyles}>
      <Text style={styles.text}>{contenido}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  green: {
    backgroundColor: "#119B48"
  },

  mustard: {
    backgroundColor: "#D1881A"
  },
  
  boton: {
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  text: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Inter Regular",
  },
});

export default Boton;
