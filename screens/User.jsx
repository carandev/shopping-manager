import { View, StyleSheet } from 'react-native'
import React from 'react'

import { CustomButton } from '../components'
import { auth } from '../firebase'

const User = () => {
  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <View style={styles.container}>
      <CustomButton text="Sign Out" onPress={handleSignOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default User
