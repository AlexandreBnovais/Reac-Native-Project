import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'

export const CardItem = ({ vaga }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
        <ImageBackground style={styles.imageBackground} source={vaga.image} resizeMethod='cover' borderRadius={20}>
            <View style={styles.textContainer}>
                <Text style={styles.textCard}>{vaga.title}</Text>
                <Text style={styles.descCard}>{vaga.local}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: '#34474B',
    padding: 15,
    opacity: 0.8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textCard: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 600,
    marginBottom: 5,
  },
  descCard: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FFFFFF'
  }

})
