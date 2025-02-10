'use client'
import MenuCart from '@/components/menu-cart'
import { AddOurRemoveToCart } from '@/components/addOurRemoveToCart'
import { useCart } from '@/context/cart-context'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { items } = useCart()
  return (
    <div className="flex flex-col  pt-[150px] pb-5 min-h-screen mx-8 items-center">
      <MenuCart />
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {items.map((product) => {
          return (
            <div
              key={product.productId}
              className="w-[47%] max-w-[200px] gap-2 pb-2 flex  flex-col pt-2   rounded-md border-[1px] border-zinc-300"
            >
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.image}
                  className="group-hover:scale-105 transition-transform duration-500"
                  width={480}
                  height={480}
                  alt=""
                  quality={100}
                />{' '}
              </Link>

              <div className="flex flex-col mb-2 h-full gap-2 mx-2">
                <Link
                  href={`/product/${product.slug}`}
                  className=" w-full flex "
                >
                  {' '}
                  <span className=" text-center  px-1">
                    {product.title}
                  </span>{' '}
                </Link>

                <div className="flex flex-col  justify-end  h-full gap-2 mx-2 items-center">
                  <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>

                  <AddOurRemoveToCart
                    productId={product.productId}
                    quantity={product.quantity}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
