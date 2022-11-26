import { addDoc, collection, getDocs } from 'firebase/firestore'

import { db } from '.'

export const createShop = async (shop) => {
  try {
    await addDoc(collection(db, 'shops'), shop)

    return { message: 'Tienda creada exitosamente' }
  } catch (error) {
    return { error }
  }
}

export const createProducts = async (product) => {
  try {
    await addDoc(collection(db, 'products'), product)

    return { message: 'Producto creado exitosamente' }
  } catch (error) {
    return { error }
  }
}

export const readShops = async (setShops) => {
  const querySnapshot = await getDocs(collection(db, 'shops'))
  const newShops = []

  querySnapshot.forEach(doc => {
    newShops.push({ id: doc.id, ...doc.data() })
  })

  setShops(newShops)
}

export const readProducts = async (shopId, setProducts) => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  const newProducts = []

  querySnapshot.forEach(doc => {
    if (doc.data().shopId === shopId) {
      newProducts.push({ id: doc.id, ...doc.data() })
    }
  })

  setProducts(newProducts)
}

export const readShop = async (user, setShop) => {
  const querySnapshot = await getDocs(collection(db, 'shops'))

  querySnapshot.forEach(doc => {
    if (doc.data().user === user) {
      setShop({ id: doc.id, ...doc.data() })
    }
  })
}
