import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import { User, Settings, Shop } from '../screens'
import colors from '../colors'

import HomeStack from './HomeStack'
import ShopStack from './ShopStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'HomeStack') {
            return <AntDesign color={colors.white} name='home' size={30}/>
          } else if (route.name === 'User') {
            return <AntDesign color={colors.white} name='user' size={30}/>
          } else if (route.name === 'Settings') {
            return <AntDesign color={colors.white} name='setting' size={30}/>
          } else if (route.name === 'Shop') {
            return <AntDesign color={colors.white} name='isv' size={30}/>
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.black, borderWidth: 0 },
        headerShown: false
      })}
    >
      <Tab.Screen component={HomeStack} name='HomeStack'/>
      <Tab.Screen component={ShopStack} name='Shop'/>
      <Tab.Screen component={User} name='User'/>
      <Tab.Screen component={Settings} name='Settings'/>
    </Tab.Navigator>
  )
}

export default TabNavigator
