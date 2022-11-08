import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Auth from './components/Auth/Auth'

export default function App () {
  return (
    <View style={styles.container}>
      <Auth />
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
  }
})
