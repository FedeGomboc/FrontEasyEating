import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font"

const Main = () => {

  const [fuentesCargadas] = useFonts({
    "Fredoka Semibold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
    "Fredoka Regular": require("../assets/fonts/Fredoka-Regular.ttf"),
    "Inter Regular": require("../assets/fonts/Inter-Regular.ttf")
  })
  
  if (!fuentesCargadas) {
    return null
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        <Text style={styles.mostaza}>Easy</Text>
        <Text style={styles.verde}>Eating</Text>
      </Text>

      <Text style={styles.subtitulo}>Escaneá, conocé, disfrutá</Text>

      <TouchableOpacity style={styles.botonIniciarSesion}>
        <Text style={styles.iniciarSesion}>Iniciar Sesión</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botonRegistrarse}>
        <Text style={styles.registrarse}>Registrarse</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  botonRegistrarse: {
    elevation: 8,
    backgroundColor: "#D1881A",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  registrarse: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: 'Inter Regular'
  },

  iniciarSesion: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: 'Inter Regular',
  },

  botonIniciarSesion: {
    elevation: 8,
    backgroundColor: "#119B48",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  container: {
    padding: 80,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#FFFAF3',
    flex: 1
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 5,
    textAlign: "center",
    fontFamily: 'Fredoka SemiBold'
  },

  subtitulo: {
    fontStyle: "italic",
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: 'Inter Regular',
    fontSize: 14
  },

  mostaza: {
    color: "#D1881A",
  },

  verde: {
    color: "#119B48",
  },
});

export default Main;
