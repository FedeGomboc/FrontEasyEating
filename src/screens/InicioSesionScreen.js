import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import Boton from "../components/Boton.jsx";
import Titulo from "../components/Titulo.jsx";

const InicioSesionScreen = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [fuentesCargadas] = useFonts({
    "Inter Regular": require("../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fuentesCargadas) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Titulo texto1="Easy" texto2="Eating" />
      <Text> </Text>

      <TextInput
        style={styles.input}
        placeholder="CORREO ELECTRÓNICO"
        onChangeText={setCorreo}
        value={correo}
      />

      <TextInput
        style={styles.input}
        placeholder="CONTRASEÑA"
        onChangeText={setContrasena}
        value={contrasena}
      />

      <Text> </Text>

      <Boton green contenido="INICIAR SESIÓN" />

      <Text> </Text>

      <TouchableOpacity style={styles.olvidarContra}>
      <Text style={styles.olvidarContra}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>

      <Text style={styles.noCuenta}>¿Todavía no tenés cuenta?</Text>
      <Text> </Text>
      <Boton mustard contenido="CREAR CUENTA" ruta="Registrarse"/>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  bottomTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },

  noCuenta: {
    fontSize: 15,
    fontFamily: "Inter Regular",
    fontWeight: "bold",
   
  },
  
  olvidarContra: {
    textDecorationLine: "underline",
    color: "#3366BB",
    fontStyle: "italic",
    alignItems: "center"
  },

  input: {
    height: 40,
    margin: 12,
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

export default InicioSesionScreen;
