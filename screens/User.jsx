import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'

import { CustomButton } from '../components'
import { auth } from '../firebase'
import colors from '../colors'

const User = ({ navigation }) => {
  const [user, setUser] = React.useState(null)
  const handleSignOut = () => {
    auth.signOut()
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const user = auth.currentUser

      setUser(user)
    })

    return unsubscribe
  }, [navigation])

  const handleEditProfile = () => {
    navigation.navigate('UpdateUserProfile', { edit: true })
  }

  if (!user) return <ActivityIndicator color={colors.white} size="large" />

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.displayName}</Text>
      <Image source={{ uri: user.photoURL }} style={styles.userImage} />
      <Text style={styles.name}>{user.phoneNumber}</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton small text="Sign Out" onPress={handleSignOut} />
        <CustomButton small text="Edit profile" onPress={handleEditProfile} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 50
  },
  name: {
    fontSize: 20,
    color: colors.white
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 50
  }
})

export default User
