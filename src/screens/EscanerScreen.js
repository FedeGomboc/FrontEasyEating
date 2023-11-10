import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const EscanerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  let host = "A-PHZ2-CIDI-011";
  let port = "5000";

  const [valores, setValores] = useState([]);

  const obtenerDatos = async (data) => {
    /* console.log("obtenerDatos"); */
    /* ${data.data} */
    /* console.log(data); */
    /* console.log(url); */
    let url = `https://backendeasyeating.onrender.com/api/productos/${data}`;
    axios
      .get(url)
      .then((result) => {
        console.log('OK');
          nuevosValores = [
          {
            idProducto: result.data.idProducto,
            barCode: result.data.barCode,
            nombre: result.data.nombre,
            proteinas: result.data.proteinas,
            carbohidratos: result.data.carbohidratos,
            grasas: result.data.grasas,
            calorias: result.data.calorias,
          }
        ];
        setValores(nuevosValores);
      })
      .catch((error) => {
        console.log("error:");
        console.log(error);
      });
  };
/* 
  useEffect(() => {
    if (valores !== null) {
      if (valores && valores.length > 0) {
        valores.map((valor, index) =>
          alert(`Codigo del codigo de barra: ${data}, ${valor.nombre}`)
        );
      } else {
        console.log("errorrrr");
      }
    }
  }, [valores]) */

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    await obtenerDatos(data);
    if (valores && valores.length > 0) {
      valores.map((valor, index) =>
        alert(`Codigo del codigo de barra: ${data}, ${valor.nombre}`)
      );
    } else {
      console.log("errorrrr");
    }
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
      {scanned && (
        <Button title={"Toca para escanear de vuelta"} onPress={() => setScanned(false)}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#FFFAF3",
    flex: 1,
  },
});

export default EscanerScreen;
