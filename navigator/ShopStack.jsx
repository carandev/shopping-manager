import React from 'react'

import { Stack } from '../App'
import { CreateProduct, CreateShop, Shop } from '../screens'

const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Shop} name="Shop" />
        <Stack.Screen component={CreateProduct} name="CreateProduct" />
        <Stack.Screen component={CreateShop} name="CreateShop" />
    </Stack.Navigator>
  )
}

export default ShopStack
