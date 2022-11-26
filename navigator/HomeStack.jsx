import React from 'react'

import { Home, Products } from '../screens'
import { Stack } from '../App'

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Products} name="Products" />
    </Stack.Navigator>
  )
}

export default HomeStack
