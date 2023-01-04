import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import { Cart } from '../screens'
import colors from '../colors'
import CartContext from '../context/CartContext'

import HomeStack from './HomeStack'
import ShopStack from './ShopStack'
import UserStack from './UserStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const { cart } = useContext(CartContext)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'HomeStack') {
            return <AntDesign color={colors.white} name='home' size={30}/>
          } else if (route.name === 'UserStack') {
            return <AntDesign color={colors.white} name='user' size={30}/>
          } else if (route.name === 'Cart') {
            return <AntDesign color={colors.white} name='shoppingcart' size={30}/>
          } else if (route.name === 'ShopStack') {
            return <AntDesign color={colors.white} name='isv' size={30}/>
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.black, borderWidth: 0 },
        headerShown: false
      })}
    >
      <Tab.Screen component={HomeStack} name='HomeStack'/>
      <Tab.Screen component={ShopStack} name='ShopStack'/>
      <Tab.Screen component={UserStack} name='UserStack'/>
      <Tab.Screen component={Cart} name='Cart' options={cart.length !== 0 && { tabBarBadge: cart.length }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator
