import { Alert, Button, Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../CustomInput'
import { createUserEmail, signInEmail } from '../../firebase/auth'

const Auth = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSignIn = async () => {
    const { user, error } = await signInEmail(emailInput, passwordInput)

    if (error) {
      Alert.alert('Problema al iniciar sesión', error.code)
    } else {
      console.log(user.email)
    }
  }

  const handleRegister = async () => {
    const { user, error } = await createUserEmail(emailInput, passwordInput)

    if (error) {
      Alert.alert('Problema al crear el usuario', error.code)
    } else {
      console.log(user.email)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomInput
        placeholder="carlos@mail.com"
        value={emailInput}
        onChangeText={setEmailInput}
      />
      <CustomInput
        password
        placeholder="ldjsfhjkf87364&5"
        value={passwordInput}
        onChangeText={setPasswordInput}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Iniciar Sesión'
          onPress={handleSignIn}
        />
        <Button
          title='Crear cuenta'
          onPress={handleRegister}
        />
      </View>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    padding: 20
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ccc'
  },
  input: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#aff',
    color: '#ccc'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
