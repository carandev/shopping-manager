import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../CustomInput'
import colors from '../../colors'
import CustomButton from '../CustomButton'
import ResetPasswordSvg from '../ResetPasswordSvg'
import { passwordReset } from '../../firebase/auth'

const PasswordReset = () => {
  const [email, setEmail] = useState('')

  const handlePasswordReset = () => {
    passwordReset(email)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
      <ResetPasswordSvg />
      <CustomInput label='Ingresa tu dirección de correo electrónico' onChangeText={setEmail} />
      <CustomButton text='Enviar' onPress={handlePasswordReset} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 60
  },
  title: {
    color: colors.white,
    fontSize: 25
  }
})

export default PasswordReset
