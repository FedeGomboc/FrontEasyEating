import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import axios from "axios";

const EscanerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [valores, setValores] = useState([]);

  const obtenerDatos = async (data) => {
    let nuevosValores = []
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
        console.log("error:", error);
        alert("Error al obtener datos del servidor, el producto podría no estar en la base de datos");
      });

  };

  /* const esApto = () => {
    axios
      .get("https://backendeasyeating.onrender.com/api/limitacionxproducto")
      .then ((result) => {
        datos = result.data

        datos.map((Info) => {

          const {idLimitacionXProducto, idProducto, idLimitacion} = Info

          {valores
            if(valores[0].idProducto) == Info.idProducto{

            }
          }
        })
      })
      .catch ((error) => {
        console.log(error)
      })
  } */


  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    await obtenerDatos(data)

  };


  const mostrarDatos = () => {
    setScanned(true);
    if (valores && valores.length > 0) {
      alert(`
      Codigo de barra: ${valores[0].barCode}, 
      Nombre: ${valores[0].nombre}, 
      Proteinas: ${valores[0].proteinas}
      Carbohidratos: ${valores[0].carbohidratos}
      Grasas: ${valores[0].grasas}
      Calorias: ${valores[0].calorias}`);
    } else {
      console.log("errorrrr");
    }
  };

  useEffect(() => {
    mostrarDatos()
  }, [valores]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={"Toca para escanear de vuelta"}
          onPress={() => setScanned(false)}
        />
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