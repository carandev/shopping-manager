import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import ProductCard from './ProductCard'

const ProductsContainer = ({ products }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} >
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})

export default ProductsContainer
