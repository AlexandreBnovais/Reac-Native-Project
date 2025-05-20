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
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  filtroSelecionado: {
    backgroundColor: '#007bff',
  },
  filtroTexto: {
    fontSize: 14,
    color: '#333',
  },
  filtroTextoSelecionado: {
    color: '#fff',
  }
})
