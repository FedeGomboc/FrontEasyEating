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
import Boton from "../components/Boton.jsx";
import Titulo from "../components/Titulo.jsx";

const LoginScreen = () => {
  const [fuentesCargadas] = useFonts({
    "Inter Regular": require("../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fuentesCargadas) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={require("../assets/icons/logo.png")}
      />

      <Titulo texto1="Easy" texto2="Eating" />

      <Text style={styles.subtitulo}>Escaneá, conocé, disfrutá</Text>

      <Boton green contenido="Iniciar Sesión" ruta="Inicio Sesión" />
      <Text> </Text>
      <Boton mustard contenido="Registrarse" ruta="Registrarse" />
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

  subtitulo: {
    fontStyle: "italic",
    textAlign: "center",
    paddingBottom: 25,
    fontFamily: "Inter Regular",
    fontSize: 14,
  },
});

export default LoginScreen;
