'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
  price: number
  slug: string
  image: string
  description: string
  title: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (
    productId: number,
    price: number,
    slug: string,
    image: string,
    description: string,
    title: string,
    quantity: number,
  ) => void
  handleMenu: () => void
  menu: boolean
  clearCart: () => void
  removeFromCart: (productId: number) => void
  removeOneFromCart: (productId: number) => void
  addOneToCart: (productId: number) => void
  closeMenu: () => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  function clearCart() {
    setCartItems([])
  }

  function removeFromCart(productId: number) {
    setCartItems((state) =>
      state.filter((item) => item.productId !== productId),
    )
  }

  function removeOneFromCart(productId: number) {
    setCartItems((state) => {
      const productIndex = state.findIndex(
        (item) => item.productId === productId,
      )

      if (productIndex >= 0 && state[productIndex].quantity > 1) {
        const newQuantity = state[productIndex].quantity - 1
        const newState = [...state]
        newState[productIndex] = {
          ...newState[productIndex],
          quantity: newQuantity,
        }
        return newState
      } else if (state[productIndex]?.quantity === 1) {
        return state.filter((item) => item.productId !== productId)
      } else {
        return state
      }
    })
  }

  function addOneToCart(productId: number) {
    setCartItems((state) => {
      const productIndex = state.findIndex(
        (item) => item.productId === productId,
      )

      if (productIndex >= 0) {
        const newQuantity = state[productIndex].quantity + 1
        const newState = [...state]
        newState[productIndex] = {
          ...newState[productIndex],
          quantity: newQuantity,
        }
        return newState
      } else {
        return state
      }
    })
  }

  function addToCart(
    productId: number,
    price: number,
    slug: string,
    title: string,
    image: string,
    description: string,
  ) {
    setCartItems((state) => {
      const productInCart = state.find((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
                price,
                slug,
                title,
                image,
                description,
              }
            : item,
        )
      } else {
        return [
          ...state,
          { productId, quantity: +1, price, slug, title, image, description },
        ]
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        removeFromCart,
        handleMenu,
        menu,
        closeMenu,
        clearCart,
        removeOneFromCart,
        addOneToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
