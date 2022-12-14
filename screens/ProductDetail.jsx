import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'

import colors from '../colors'
import { CustomButton } from '../components'
import CartContext from '../context/CartContext'

const ProductDetail = ({ route }) => {
  const { product } = route.params
  const { setCart } = useContext(CartContext)

  const handleAddToCart = () => {
    setCart(lastValue => [...lastValue, { ...product, count: 1 }])
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: product.logo }} style={styles.img} />
        <Text style={styles.productName}>{product.name}</Text>
      </View>
      <CustomButton text="Añadir al carrito" onPress={handleAddToCart}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 50,
    backgroundColor: colors.darkBlue
  },
  img: {
    width: 320,
    height: 320,
    resizeMode: 'contain'
  },
  productName: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
})

export default ProductDetail
