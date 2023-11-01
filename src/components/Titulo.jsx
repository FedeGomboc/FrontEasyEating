import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import { useFonts } from "expo-font";

const Titulo = ({texto1, texto2}) => {
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
  },

  mustard: {
    color: "#D1881A",
  },

  green: {
    color: "#119B48",
  },
})

export default Titulo