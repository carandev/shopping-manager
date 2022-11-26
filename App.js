import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { onAuthStateChanged } from 'firebase/auth'
import { ActivityIndicator, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import AuthContextProvider, { authContext } from './context/AuthContext'
import { auth } from './firebase'
import { WelcomeStack, TabNavigator } from './navigator'

export const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  const { user, setUser } = useContext(authContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authEffect = onAuthStateChanged(auth, async user => {
      setUser(user)
      setLoading(false)
    })

    return authEffect
  }, [user, setUser])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      {user ? <TabNavigator/> : <WelcomeStack />}
    </NavigationContainer>
  )
}

export default function App () {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  )
}
