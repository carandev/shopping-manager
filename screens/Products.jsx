import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import ProductsContainer from '../components/Products/ProductsContainer'
import { readProducts } from '../firebase/firestore'
import colors from '../colors'

const Products = ({ route, navigation }) => {
  const [products, setProducts] = React.useState([])

  const { shop } = route.params

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      readProducts(shop.id, setProducts)
    })

    return unsubscribe
  }, [shop, navigation])

  return (
    <View style={styles.container}>
      <Text>Tienda {shop.name}</Text>
      <ProductsContainer products={products} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.darkBlue
  }
})

export default Products
