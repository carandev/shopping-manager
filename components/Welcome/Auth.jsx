import { Alert, StyleSheet, Text, View, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../CustomInput'
import { createUserEmail, signInEmail } from '../../firebase/auth'
import CustomButton from '../CustomButton'
import colors from '../../colors'
import { LoginSvg } from '../svg'

const Auth = ({ navigation }) => {
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

  const handlePasswordReset = () => {
    navigation.navigate('PasswordReset')
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
      <TouchableWithoutFeedback onPress={handlePasswordReset}>
        <Text style={styles.passwordReset}>¿Olvidaste tu contraseña?</Text>
      </TouchableWithoutFeedback>
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
    alignItems: 'center',
    backgroundColor: colors.darkBlue
  },
  img: {
    alignSelf: 'center',
    margin: 30
  },
  title: {
    fontSize: 20,
    color: colors.white,
    width: '100%',
    marginBottom: 30
  },
  passwordReset: {
    color: colors.white,
    alignSelf: 'flex-end',
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between'
  }
})
