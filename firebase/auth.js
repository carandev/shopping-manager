import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'

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
