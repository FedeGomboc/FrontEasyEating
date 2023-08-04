import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import Boton from "../components/Boton.jsx";
import Titulo from "../components/Titulo.jsx";
import EspacioVacio from "../components/EspacioVacio.jsx";
import { Dropdown } from 'react-native-element-dropdown';

const RegistrarseScreen = () => {

  let host = "A-PHZ2-CIDI-012";
  let port = "5000";

  const [limitaciones, SetLimitaciones] = useState([]);
  const [botonesClickeados, setBotonesClickeados] = useState([]);

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
