import React from 'react'

import { Home, ProductDetail, Products } from '../screens'
import { Stack } from '../App'

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Products} name="Products" />
      <Stack.Screen component={ProductDetail} name="ProductDetail" />
    </Stack.Navigator>
  )
}

export default HomeStack
