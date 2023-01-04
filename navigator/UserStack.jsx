import React from 'react'

import { Stack } from '../App'
import { UpdateUserProfile, User } from '../screens'
import { auth } from '../firebase'

const UserStack = ({ navigation }) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!auth.currentUser?.displayName) {
        navigation.navigate('UpdateUserProfile')
      } else {
        navigation.navigate('User')
      }
    })

    return unsubscribe
  }, [navigation])

  React.useEffect(() => {
    if (!auth.currentUser?.displayName) {
      navigation.navigate('UpdateUserProfile')
    } else {
      navigation.navigate('User')
    }
  }, [navigation])

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen component={User} name="User" />
        <Stack.Screen component={UpdateUserProfile} name="UpdateUserProfile" />
    </Stack.Navigator>
  )
}

export default UserStack
