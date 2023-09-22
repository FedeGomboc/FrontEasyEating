import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import Boton from "../components/Boton.jsx";
import Titulo from "../components/Titulo.jsx";
import EspacioVacio from "../components/EspacioVacio.jsx";
import { Dropdown } from 'react-native-element-dropdown';

const RegistrarseScreen = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  return (
    <View style={styles.container}>
      <Titulo texto1="Easy" texto2="Eating" />

      <EspacioVacio altura={35} />

      <TextInput
        style={styles.input}
        placeholder="NOMBRE"
        onChangeText={setNombre}
        value={nombre}
      />

      <TextInput
        style={styles.input}
        placeholder="APELLIDO"
        onChangeText={setApellido}
        value={apellido}
      />

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

      
      
      <EspacioVacio altura={35}/>

      <Boton green contenido="CREAR CUENTA" ruta="Condicion"/>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default RegistrarseScreen;
