import React from 'react'

import { Stack } from '../App'
import { UpdateUserProfile, User } from '../screens'
import { auth } from '../firebase'

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={auth.currentUser?.displayName ? 'User' : 'UpdateUserProfile'}
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen component={User} name="User" />
        <Stack.Screen component={UpdateUserProfile} name="UpdateUserProfile" />
    </Stack.Navigator>
  )
}

export default UserStack
