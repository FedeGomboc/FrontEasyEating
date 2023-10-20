import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import EspacioVacio from "../components/EspacioVacio.jsx";

const CondicionScreen = () => {
  let host = "localhost";
  let port = "5000";

  const [limitaciones, SetLimitaciones] = useState([]);
  const [botonesClickeados, setBotonesClickeados] = useState([]);

  const obtenerLimitaciones = () => {
    axios
      .get(`https://backendeasyeating.render/api/limitaciones/`)
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
        ? limitaciones.map((limitacion, index) => (
          <TouchableOpacity
            style={botonesClickeados[index] ? styles.botonClickeado : styles.boton}
            key={index}
            onPress={() => {
              const nuevosBotonesClickeados = [...botonesClickeados];
              nuevosBotonesClickeados[index] = true;
              setBotonesClickeados(nuevosBotonesClickeados);
            }}>
            <Text style={styles.textoBoton}>{limitacion.limitacion}</Text>
          </TouchableOpacity>
        ))
        :
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Cargando</Text>
        </TouchableOpacity>}


      <TouchableOpacity style={styles.botonFlecha}>
        <Text style={styles.textoFlecha}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  botonClickeado: {
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#119B48",
    marginBottom: 20,
    width: 200,
    height: 90,
    borderWidth: 3.3,
    borderColor: "#00000"
  },

  botonFlecha: {
    borderRadius: 20,
    backgroundColor: "#119B48",
    width: 70,
    height: 80,
    position: "absolute",
    bottom: 20,
    left: 163.5,
    right: 0,

  },

  textoFlecha: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Inter Regular",
    fontSize: 50,
  },

  boton: {
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: "#119B48",
    marginBottom: 20,
    width: 200,
    height: 90,
    alignItems: "center",
  },

  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Inter Regular",
    fontSize: 25,
  },

  text: {
    fontWeight: "bold",
    fontSize: 35,
    paddingBottom: 5,
    textAlign: "center",
  },

  container: {
    padding: 80,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },
});

export default CondicionScreen;
