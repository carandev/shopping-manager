import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import colors from '../../colors'

const ShopCard = ({ shop }) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={styles.container}
      >
        <Image
          source={{ uri: shop.logo }}
          style={styles.img}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})

export default ShopCard
