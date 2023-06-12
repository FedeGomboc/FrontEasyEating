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
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import Boton from "./Boton.jsx";

const Main = () => {
  const [fuentesCargadas] = useFonts({
    "Fredoka Semibold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
    "Fredoka Regular": require("../assets/fonts/Fredoka-Regular.ttf"),
  });

  if (!fuentesCargadas) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      <Image style={styles.imagen} source={require("../assets/icons/logo.png")} />

      <Text style={styles.titulo}>
        <Text style={styles.mostaza}>Easy</Text>
        <Text style={styles.verde}>Eating</Text>
      </Text>

      <Text style={styles.subtitulo}>Escaneá, conocé, disfrutá</Text>

      <Boton green contenido="Iniciar Sesión" />
      <Boton mustard contenido="Registrarse" />
       
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    alignSelf: "center",
    height: 200,
    width: 200,
  },

  container: {
    padding: 80,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 5,
    textAlign: "center",
    fontFamily: "Fredoka SemiBold",
  },

  subtitulo: {
    fontStyle: "italic",
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: "Inter Regular",
    fontSize: 14,
  },

  mostaza: {
    color: "#D1881A",
  },

  verde: {
    color: "#119B48",
  },
});

export default Main;
