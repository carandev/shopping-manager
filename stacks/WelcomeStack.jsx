import React from 'react'

import { Stack } from '../App'
import Auth from '../components/Welcome/Auth'
import Entry from '../components/Welcome/Entry'
import Summary from '../components/Welcome/Summary'

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Entry} name="Entry" />
      <Stack.Screen component={Summary} name="Summary" />
      <Stack.Screen component={Auth} name="Login" />
    </Stack.Navigator>
  )
}

export default WelcomeStack
