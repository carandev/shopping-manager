import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { onAuthStateChanged } from 'firebase/auth'
import { ActivityIndicator, View } from 'react-native'

import Auth from './components/Auth/Auth'
import Home from './pages/Home'
import AuthContextProvider, { authContext } from './context/AuthContext'
import { auth } from './firebase'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Auth} name="Login" />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  )
}

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
      {user ? <HomeStack/> : <AuthStack />}
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
