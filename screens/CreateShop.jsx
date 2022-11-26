import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import colors from '../colors'
import { CustomButton, CustomInput } from '../components'
import { createShop } from '../firebase/firestore'
import { auth } from '../firebase'

const CreateShop = ({ navigation }) => {
  const [name, setName] = React.useState('')
  const [logo, setLogo] = React.useState('')

  const handleCreateShop = () => {
    const { error } = createShop({ name, logo, user: auth.currentUser.uid })

    if (error) {
      Alert.alert('Error', error)
    } else {
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Crea tu tienda online fácilmente
      </Text>
      <Text
        style={styles.text}
      >
        Ingresa los siguientes datos para crear tu tienda online exitosamente
      </Text>
      <CustomInput
        label='Nombre'
        placeholder='La mejor tienda'
        onChangeText={setName}
      />
      <CustomInput
        label='URL del logotipo'
        placeholder='https://...'
        onChangeText={setLogo}
      />
      <CustomButton
        large
        text='Crear tienda'
        onPress={handleCreateShop}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
    backgroundColor: colors.darkBlue
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 30
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
})

export default CreateShop
