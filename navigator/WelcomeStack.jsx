import React from 'react'

import { Stack } from '../App'
import { Auth, Entry, PasswordReset, Summary } from '../components/Welcome'

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Entry} name="Entry" />
      <Stack.Screen component={Summary} name="Summary" />
      <Stack.Screen component={Auth} name="Login" />
      <Stack.Screen component={PasswordReset} name="PasswordReset" />
    </Stack.Navigator>
  )
}

export default WelcomeStack
