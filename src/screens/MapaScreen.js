import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Constants from "expo-constants";
import MapView,  { PROVIDER_GOOGLE } from "react-native-maps";

function MapaScreen() {
    return (
        <View style={styles.container}>
            <MapView style={{height: "100%", width: "100%"}}>
               {/* provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                 initialRegion={{
                    latitude: -34.60853837294786,
                    longitude: -58.4306551602909,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }} 
                mapType="standard"*/}

            </MapView>   

        </View>
    )
}

/* const coords = [{ lat: -34.60853837294786, lng: -58.4306551602909 },
    { lat: -34.61335019300495, lng: -58.43798387809736 },
    { lat: -34.61172463990566, lng: -58.422167399999985 },
    { lat: -34.611538672314765, lng: -58.4303597451144 },
    ] */

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
