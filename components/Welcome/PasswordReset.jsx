import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import CustomInput from '../CustomInput'
import colors from '../../colors'
import CustomButton from '../CustomButton'
import ResetPasswordSvg from '../ResetPasswordSvg'

const PasswordReset = () => {
  const handlePasswordReset = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
      <ResetPasswordSvg />
      <CustomInput label='Ingresa tu dirección de correo electrónico' />
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
