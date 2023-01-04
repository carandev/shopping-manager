import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { CustomButton, CustomInput } from '../components'
import colors from '../colors'
import { auth } from '../firebase'

const UpdateUserProfile = ({ navigation, route }) => {
  const [name, setName] = React.useState('')
  const [photoURL, setPhotoURL] = React.useState('')
  const [whatsapp, setWhatsapp] = React.useState('')

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params.edit) {
        const user = auth.currentUser

        setName(user.displayName)
        setPhotoURL(user.photoURL)
        setWhatsapp(user.phoneNumber)
      }
    })

    return unsubscribe
  }, [navigation, route])

  const handleUpdateProfile = () => {
    const user = auth.currentUser

    user.photoURL = photoURL
    user.displayName = name
    user.phoneNumber = whatsapp

    navigation.navigate('HomeStack')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa tus datos</Text>

      <CustomInput label="Nombre" value={name} onChangeText={setName}/>
      <CustomInput label="URL de la foto de perfil" value={photoURL} onChangeText={setPhotoURL} />
      <CustomInput label="Número de whatsapp" value={whatsapp} onChangeText={setWhatsapp} />

      <CustomButton text="Enviar" onPress={handleUpdateProfile} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.darkBlue,
    paddingTop: 40,
    paddingHorizontal: 20
  },
  title: {
    color: colors.white,
    fontSize: 30,
    paddingBottom: 20
  }
})

export default UpdateUserProfile
