import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { readProducts, readShop } from '../firebase/firestore'
import { auth } from '../firebase'
import { CustomButton } from '../components'
import colors from '../colors'

const Shop = ({ navigation }) => {
  const [shop, setShop] = React.useState()
  const [products, setProducts] = React.useState([])

  useEffect(() => {
    readShop(auth.currentUser.uid, setShop)

    if (shop) {
      readProducts(shop.id, setProducts)
    }
  }, [shop])

  const handleCreateShop = () => {
    navigation.navigate('CreateShop')
  }

  const handleCreateProduct = () => {
    navigation.navigate('CreateProduct', { shop: shop.id })
  }

  return (
    <View style={styles.container}>
      {
        products.map(product => <Text key={product.id}>{product.name}</Text>)
      }
      {
        shop
          ? <CustomButton text="Crear producto" onPress={handleCreateProduct} />
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
