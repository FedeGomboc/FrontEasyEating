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

const Titulo = ({texto1, texto2}) => {

  const [fuentesCargadas] = useFonts({
    "Fredoka Semibold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
    "Fredoka Regular": require("../assets/fonts/Fredoka-Regular.ttf"),
  });

  if (!fuentesCargadas) {
    return null;
  }

    return (
      <Text style={styles.titulo}>
        <Text style={styles.mustard}>{texto1}</Text>
        <Text style={styles.green}>{texto2}</Text>
      </Text>
    )
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 5,
    textAlign: "center",
    fontFamily: "Fredoka SemiBold",
  },

  mustard: {
    color: "#D1881A",
  },

  green: {
    color: "#119B48",
  },
})

export default Titulo