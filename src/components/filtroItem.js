import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const FiltroItem = ({ filtro, selecionado, onPress}) => {
  return (
    <TouchableOpacity
        style={[styles.filtroItem, selecionado && styles.filtroSelecionado]}
        onPress={onPress}
    >
        <Text style={[styles.filtroItem, selecionado && styles.filtroTextoSelecionado]}>{filtro}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    filtroItem: {
    backgroundColor: '#000000B2',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    margin: 5
    
  },
  filtroSelecionado: {
    backgroundColor: '#000000',
  },
  filtroTexto: {
    fontSize: 14,
  },
  filtroTextoSelecionado: {
  }
})
