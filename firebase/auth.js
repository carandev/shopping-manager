import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'
import { Alert } from 'react-native'

import { auth } from './index'

export const createUserEmail = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    return { user }
  } catch (error) {
    return { error }
  }
}

export const signInEmail = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    return { user }
  } catch (error) {
    return { error }
  }
}

export const passwordReset = async email => {
  try {
    await sendPasswordResetEmail(auth, email)

    Alert.alert('Correo enviado')
  } catch (error) {
    Alert.alert(error.message)
  }
}
