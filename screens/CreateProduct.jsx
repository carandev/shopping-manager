import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import colors from '../colors'
import { CustomButton, CustomInput } from '../components'
import { createProduct } from '../firebase/firestore'

const CreateProduct = ({ navigation, route }) => {
  const [name, setName] = React.useState('')
  const [logo, setLogo] = React.useState('')

  const handleCreateProduct = () => {
    const { error } = createProduct({
      name,
      logo,
      shop: route.params.shop
    })

    setLogo('')
    setName('')

    if (error) {
      Alert.alert('Error', error)
    } else {
      navigation.navigate('Shop')
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Añade un producto a tu tienda
      </Text>
      <Text
        style={styles.text}
      >
        Ingresa los siguientes datos para crear tu tienda online exitosamente
      </Text>
      <CustomInput
        label='Nombre'
        placeholder='El mejor productos'
        onChangeText={setName}
      />
      <CustomInput
        label='URL de la imagen del producto'
        placeholder='https://...'
        onChangeText={setLogo}
      />
      <CustomButton
        large
        text='Crear producto'
        onPress={handleCreateProduct}
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

export default CreateProduct
