import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import colors from '../../colors'

const ProductCard = ({ product }) => {
  const navigation = useNavigation()
  const goShop = () => {
    navigation.navigate('ProductDetail', { product })
  }

  return (
    <TouchableWithoutFeedback onPress={goShop}>
      <View
        style={styles.container}
      >
        <Image
          source={{ uri: product.logo }}
          style={styles.img}
        />
        <Text
          style={styles.name}
        >
          {product.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 150,
    height: 150
  },
  img: {
    width: 70,
    height: 70,
    margin: 10,
    resizeMode: 'contain'
  },
  name: {
    backgroundColor: colors.black,
    color: colors.white,
    width: '100%',
    borderBottomEndRadius: 10,
    textAlign: 'center',
    padding: 20
  }
})

export default ProductCard
