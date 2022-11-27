import React, { createContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
    {children}
    </CartContext.Provider>
  )
}

export default CartContext
