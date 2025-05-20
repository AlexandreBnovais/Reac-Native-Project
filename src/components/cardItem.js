import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

export const CardItem = ({ vaga }) => {
  return (
    <TouchableOpacity>
        <ImageBackground source={vaga.image}>
            <View>
                <Text>{vaga.title}</Text>
                <Text>{vaga.local}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
  )
}
