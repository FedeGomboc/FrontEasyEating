import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Boton = ({green, mustard,  contenido, ruta}) => {

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

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={botonStyles} onPress={ () => navigation.navigate(ruta) }>
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
    paddingVertical: 12,
    paddingHorizontal: 13
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
