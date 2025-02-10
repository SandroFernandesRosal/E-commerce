'use client'
import { useCart } from '@/context/cart-context'

import { Plus, Minus } from 'lucide-react'

export interface RemoveToCartButtonProps {
  productId: number
  quantity: number
}

export function AddOurRemoveToCart({
  productId,
  quantity,
}: RemoveToCartButtonProps) {
  const { removeOneFromCart, addOneToCart } = useCart()

  function addQuantity() {
    addOneToCart(productId)
  }

  function removeQuantity() {
    removeOneFromCart(productId)
  }

  return (
    <div className=" flex flex-col items-center justify-center font-semibold ">
      <div className="flex gap-4">
        <Minus onClick={removeQuantity} className="text-3xl cursor-pointer" />
        {quantity}
        <Plus onClick={addQuantity} className="text-3xl cursor-pointer" />
      </div>{' '}
    </div>
  )
}
