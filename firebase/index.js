import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import * as dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'shopping-manager-993f5.firebaseapp.com',
  projectId: 'shopping-manager-993f5',
  storageBucket: 'shopping-manager-993f5.appspot.com',
  messagingSenderId: '951192813355',
  appId: '1:951192813355:web:2c9fe001290f2a914fcf6e'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
