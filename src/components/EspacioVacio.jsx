import { View, Text } from 'react-native'
import React from 'react'

const EspacioVacio = ({altura}) => {
  return (
    <View style={{height: altura}}/>
  )
}

export default EspacioVacio