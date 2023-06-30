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
import EspacioVacio from "../components/EspacioVacio.jsx";
// import DatePicker from "react-native-datepicker";

const RegistrarseScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [fecha, setFecha] = useState(new Date());

  /* const handleDateChange = (newDate) => {
    setDate(newDate);
  }; */

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

      {/* <DatePicker
        style={{ width: 200 }}
        date={date}
        mode="datetime"
        placeholder="Seleccionar fecha y hora"
        format="YYYY-MM-DD HH:mm"
        minDate="2021-01-01"
        maxDate="2023-12-31"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={handleDateChange}
      /> */}
      
      <EspacioVacio altura={35}/>

      <Boton green contenido="CREAR CUENTA"/>
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
