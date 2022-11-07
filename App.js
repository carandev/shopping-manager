import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My awesome app</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#445',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ccc'
  }
})
