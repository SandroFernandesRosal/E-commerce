'use client'
import { useCart } from '@/context/cart-context'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function CartWidget() {
  const { items } = useCart()
  return (
    <Link href={'/cart'} className=" items-center gap-2 flex relative">
      <ShoppingCart className="text-textsecondary  hover:text-secondary" />

      <span
        className={`text-sm absolute w-4 h-4 justify-center items-center top-0 ml-[14px]   bg-secondary rounded-full flex ${items.length > 0 ? 'flex' : 'hidden'}`}
      >
        {items.length}
      </span>
    </Link>
  )
}
