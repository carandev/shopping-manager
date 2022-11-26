import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { readShop } from '../firebase/firestore'
import { auth } from '../firebase'

const Shop = () => {
  const [shop, setShop] = React.useState({})

  useEffect(() => {
    readShop(auth.currentUser.uid, setShop)
  }, [])

  return (
    <View style={styles.container}>
      {
        shop && <Text>{shop.name}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Shop
