import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import Home from '../pages/Home'
import User from '../pages/User'
import Settings from '../pages/Settings'
import colors from '../colors'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <AntDesign color={colors.white} name='isv' size={30}/>
          } else if (route.name === 'User') {
            return <AntDesign color={colors.white} name='user' size={30}/>
          } else if (route.name === 'Settings') {
            return <AntDesign color={colors.white} name='setting' size={30}/>
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.black, borderWidth: 0 },
        headerShown: false
      })}
    >
      <Tab.Screen component={Home} name='Home'/>
      <Tab.Screen component={User} name='User'/>
      <Tab.Screen component={Settings} name='Settings'/>
    </Tab.Navigator>
  )
}

export default TabNavigator
