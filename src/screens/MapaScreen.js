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

function MapaScreen() {
  const [restaurantes, SetRestaurantes] = useState([]);

  let host = "A-PHZ2-CIDI-011";
  let port = "5000";

  const MARKERS_DATA = [
    {
      id: '1',
      latitude: -34.60853837294786,
      longitude: -58.4306551602909,
      color: '#2F3136',
      name: 'Green Deli',
      direction: 'Av. Díaz Vélez 4501',
    },
    {
      id: '2',
      latitude: -34.61335019300495,
      longitude: -58.43798387809736,
      color: '#A3EAD8',
      name: 'Cocelia',
      direction: 'Av. Acoyte 449',
    },
    {
      id: '3',
      latitude: -34.61172463990566,
      longitude: -58.422167399999985,
      color: '#E990BB',
      name: 'Los Orientales',
      direction: 'Av. Rivadavia 3981',
    },
    {
      id: '4',
      latitude: -34.611538672314765,
      longitude: -58.4303597451144,
      color: '#EFD080',
      name: 'Gra-Hu',
      direction: 'Río de Janeiro 320',
    },
  ];

  const obtenerRestaurantes = () => {
    axios
      .get(`http://${host}:${port}/api/restaurantes/`)
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
              <Marker key={index} coordinate={{ latitude: restaurante.latitud, longitude: restaurante.longitud }}></Marker>
            ))
            :
            console.log("error")}

        {/* {MARKERS_DATA.map((marker) => (
          <Marker key={marker.id} coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}></Marker>
        ))} */}
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
