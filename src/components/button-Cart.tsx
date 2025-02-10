'use client'
import { useCart } from '@/context/cart-context'
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface AddToCartButtonProps {
  productId: number
  price: number
  slug: string
  title: string
  image: string
  description: string
  quantity: number
}

export function ButtonCart({
  productId,
  price,
  slug,
  image,
  description,
  title,
  quantity,
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [message, setMessage] = useState(false)

  function handleAddProductToCart() {
    addToCart(productId, price, slug, title, image, description, quantity)
    setMessage(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(false)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="absolute">
        {message && (
          <p className="w-[200px] text-center p-1 rounded-full bg-primary overflow-hidden ">
            ítem adicionado ao carrinho
          </p>
        )}
      </div>{' '}
      <ShoppingCart
        onClick={handleAddProductToCart}
        className=" hover:text-primary  cursor-pointer"
        size={30}
      />
    </>
  )
}
