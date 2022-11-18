import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../../colors'

const ShopCard = ({ shop }) => {
  return (
    <View style={styles.container}>
      <Text>{shop.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: colors.white,
    width: 120,
    height: 120,
    borderRadius: 20
  }
})

export default ShopCard
