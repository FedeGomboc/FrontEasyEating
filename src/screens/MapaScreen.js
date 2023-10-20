import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


function MapaScreen() {
  const [restaurantes, SetRestaurantes] = useState([]);

  const navigation = useNavigation()

  let host = "A-PHZ2-CIDI-011";
  let port = "5000";

  const obtenerRestaurantes = () => {
    axios
      .get(`https://backendeasyeating.onrender.com/api/restaurantes`)
      .then((result) => {
        const restaurantes = result.data;

        restaurantes.map((Restaurante) => {
          const { idRestaurante, nombre, latitud, longitud } = Restaurante;

          console.log(`
          ID: ${idRestaurante}
          Nombre: ${nombre}
        `);
          SetRestaurantes(restaurantes)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    obtenerRestaurantes();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{ height: "100%", width: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -34.60853837294786,
          longitude: -58.4306551602909,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003
        }}
        mapType="standard">

        {restaurantes.length > 0
            ? restaurantes.map((restaurante, index) => (
              <Marker key={index} coordinate={{ latitude: parseFloat(restaurante.latitud), longitude: parseFloat(restaurante.longitud) }}></Marker>
            ))
            :
            console.log("error")}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },
});

export default MapaScreen
