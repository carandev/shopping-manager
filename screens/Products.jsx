import { View, Text } from 'react-native'
import React from 'react'

import ProductsContainer from '../components/Products/ProductsContainer'

const Products = ({ route }) => {
  return (
    <View>
      <Text>Tienda {route.params.name}</Text>
      <ProductsContainer />
    </View>
  )
}

export default Products
