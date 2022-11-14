import { Alert, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../CustomInput'
import { createUserEmail, signInEmail } from '../../firebase/auth'
import CustomButton from '../CustomButton'
import colors from '../../colors'
import LoginSvg from '../LoginSvg'

const Auth = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    const { error } = await signInEmail(emailInput, passwordInput)

    if (error) {
      Alert.alert('Problema al iniciar sesión', error.code)
    }
  }

  const handleRegister = async () => {
    setLoading(true)
    const { error } = await createUserEmail(emailInput, passwordInput)

    setLoading(false)

    if (error) {
      Alert.alert('Problema al crear el usuario', error.code)
    }
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <LoginSvg
        style={styles.img}
      />
      <Text style={styles.title}>Iniciar sesión o Crea una cuenta</Text>
      <CustomInput
        label='Correo'
        placeholder="Tu correo"
        value={emailInput}
        onChangeText={setEmailInput}
      />
      <CustomInput
        password
        label='Contraseña'
        placeholder="Contraseña"
        value={passwordInput}
        onChangeText={setPasswordInput}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          text='Iniciar Sesión'
          onPress={handleSignIn}
        />
        <CustomButton
          text='Crear Cuenta'
          onPress={handleRegister}
        />
      </View>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.darkBlue
  },
  img: {
    alignSelf: 'center',
    margin: 30
  },
  title: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  }
})
