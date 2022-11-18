import { addDoc, collection, getDocs } from 'firebase/firestore'

import { db } from '.'

export const writeData = async (shop) => {
  try {
    const docRef = await addDoc(collection(db, 'shops'), shop)

    return { message: 'Tienda creada exitosamente' }
  } catch (error) {
    return { error }
  }
}

export const readData = async (setShops) => {
  const querySnapshot = await getDocs(collection(db, 'shops'))
  const newShops = []

  querySnapshot.forEach(doc => {
    newShops.push({ id: doc.id, ...doc.data() })
  })

  setShops(newShops)
}
