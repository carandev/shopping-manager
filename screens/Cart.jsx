import { View, StyleSheet, ScrollView, Linking } from 'react-native'
import React, { useContext } from 'react'

import CartContext from '../context/CartContext'
import ProductCard from '../components/Products/ProductCard'
import colors from '../colors'
import { CustomButton } from '../components'
import { auth } from '../firebase'

const Cart = () => {
  const { cart } = useContext(CartContext)

  const handleSendOrder = async () => {
    const message = `
      Pedido de ${auth.currentUser.email}:
        ${cart.map(product => product.name)}
    `
    const number = '3185371949'

    const URL = `whatsapp://send?text=${message}&phone=57${number}`

    await Linking.openURL(URL)
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {
          cart.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </ScrollView>
      <CustomButton text="Enviar pedido" onPress={handleSendOrder} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.darkBlue,
    paddingVertical: 50
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})

export default Cart
