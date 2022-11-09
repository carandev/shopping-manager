import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../CustomInput'

const Auth = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSignIn = () => {
    console.log(emailInput, passwordInput)
  }

  const handleRegister = () => {
    console.log(emailInput, passwordInput)
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
