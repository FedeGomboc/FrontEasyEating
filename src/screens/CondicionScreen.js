import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import EspacioVacio from "../components/EspacioVacio.jsx";

const CondicionScreen = () => {
  let host = "A-PHZ2-CIDI-011";
  let port = "5000";

  const [limitaciones, SetLimitaciones] = useState([]);

  const obtenerLimitaciones = () => {
    axios
      .get(`http://${host}:${port}/api/limitaciones/`)
      .then((result) => {
        const limitaciones = result.data;

        limitaciones.map((Limitacion) => {
          const { idLimitacion, limitacion } = Limitacion;

          console.log(`
          ID: ${idLimitacion}
          Nombre: ${limitacion}
        `);

          SetLimitaciones(limitaciones);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    obtenerLimitaciones();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Cual es tu condición?</Text>

      <EspacioVacio altura={15} />

      {limitaciones.length > 0
        ? limitaciones.map((limitacion) => (
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.textoBoton}>{limitacion.limitacion}</Text>
            </TouchableOpacity>
          ))
        : 
        <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>Cargando</Text>
        </TouchableOpacity>}
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
    marginBottom: 20,
    width: 200,
    height: 90
  },

  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Inter Regular",
    fontSize: 30,
  },

  text: {
    fontWeight: "bold",
    fontSize: 35,
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
