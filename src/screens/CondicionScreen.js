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
import axios from "axios"
import EspacioVacio from "../components/EspacioVacio.jsx";

const CondicionScreen = () => {
  let host = "A-PHZ2-CIDI-010"
  let port = "5000"

    axios
    .get(`http://${host}:${port}/api/limitaciones/`)
    .then((result) => {
      const limitaciones = result.data

      limitaciones.map((Limitacion) => {
        const {idLimitacion, limitacion} = Limitacion

        console.log(`
        ID: ${idLimitacion}
        Nombre: ${limitacion}
        `)
      })
    })
    .catch ((error) => {
      console.log(error)
    })  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Cual es tu condición?</Text>

      <EspacioVacio altura={15}/>

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>Diabetes</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#119B48",
  },
  
  textoBoton: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Inter Regular",
    fontSize: 30,
  },
  
  text: {
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 5,
    textAlign: "center",
    fontFamily: "Fredoka SemiBold",
  },

  container: {
    padding: 80,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },
});

export default CondicionScreen;
