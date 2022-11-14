import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import { auth } from '../firebase'
import CustomButton from '../components/CustomButton'

const Home = ({ navigation }) => {
  const [user, setUser] = useState({})

  const handleSignOut = () => {
    auth.signOut()
  }

  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido {user.displayName || user.email}</Text>
      <CustomButton text='Cerrar Sesión' onPress={handleSignOut} />
    </View>
  )
}

export default Home
