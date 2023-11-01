import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function MapaScreen() {
  const [restaurantes, SetRestaurantes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [restauranteSeleccionado, setRestauranteSeleccionado] = useState(null);

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
          SetRestaurantes(restaurantes);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    obtenerRestaurantes();
  }, []);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          {restauranteSeleccionado && <Text style={styles.modalText}>Restaurante {restauranteSeleccionado.nombre}</Text>}
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <MapView
        style={{ height: "100%", width: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -34.60853837294786,
          longitude: -58.4306551602909,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard"
      >
        {restaurantes.length > 0
          ? restaurantes.map((restaurante, index) => (
              <TouchableOpacity>
                <Marker key={index} coordinate={{latitude: parseFloat(restaurante.latitud),longitude: parseFloat(restaurante.longitud)}} onPress={() => {setRestauranteSeleccionado(restaurante); setModalVisible(true)} }></Marker>
              </TouchableOpacity>
            ))
          : console.log("error")}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MapaScreen;
