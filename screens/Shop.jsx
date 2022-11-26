import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { readShop } from '../firebase/firestore'
import { auth } from '../firebase'
import { CustomButton } from '../components'
import colors from '../colors'

const Shop = ({ navigation }) => {
  const [shop, setShop] = React.useState()

  useEffect(() => {
    readShop(auth.currentUser.uid, setShop)
  }, [])

  const handleCreateShop = () => {
    navigation.navigate('CreateShop')
  }

  return (
    <View style={styles.container}>
      {
        shop
          ? <Text>{shop.name}</Text>
          : <CustomButton text="Crear tienda" onPress={handleCreateShop} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue
  }
})

export default Shop
