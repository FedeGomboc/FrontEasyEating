import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Constants from 'expo-constants'

const Main = (props) => {

    const {onPress} = props

    return (
        <View style={styles.container}>
        <Text style={styles.titulo}> <Text style={styles.mostaza}>Easy</Text><Text style={styles.verde}>Eating</Text></Text>
        <Text style={styles.subtitulo}>Escaneá, conocé, disfrutá</Text>
        {/* <Button title="Iniciar sesión" style={styles.boton}></Button> */}
        <Pressable style={styles.boton} onPress={onPress}>
            <Text>Iniciar sesion</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({

    boton:{ 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    container: {
        padding: 80,
        marginTop: Constants.statusBarHeight,
    },
    
    titulo: {
      fontWeight: 'bold',
      fontSize: 40,
      paddingBottom: 5,
      textAlign: 'center'
    },
  
    subtitulo:{
      fontStyle: 'italic',
      textAlign: 'center',
      paddingBottom: 50
    },
  
    mostaza: {
      color: '#D1881A'
    },
  
    verde: {
      color: '#119B48'
    },
  
    boton: {
      
    },
  })

export default Main