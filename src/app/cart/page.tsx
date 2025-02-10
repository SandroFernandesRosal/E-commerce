'use client'
import MenuCart from '@/components/menu-cart'
import { AddOurRemoveToCart } from '@/components/addOurRemoveToCart'
import { useCart } from '@/context/cart-context'
import Image from 'next/image'
import Link from 'next/link'


export default function Cart() {
  const { items } = useCart()
  return (
    <div className="flex flex-col pt-[100px] min-h-screen mx-8 items-center">
      <MenuCart />
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {items.map((product) => {
          return (
            <div
              key={product.productId}
              className="group items-center gap-2 py-2 flex-col rounded-lg bg-bglightsecundary dark:bg-bgdarksecundary shadow shadow-gray-500 dark:shadow-shadowfooterdark flex justify-start w-[47%] max-w-[200px] "
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

              <Link href={`/product/${product.slug}`} className=" ">
                {' '}
                <span className="text-sm px-1 text-center flex ">
                  {product.title}
                </span>{' '}
              </Link>

              <div className="flex flex-col  justify-end  h-full gap-2 mx-2 items-center">
                <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>

                <AddOurRemoveToCart
                  productId={product.productId}
                  quantity={product.quantity}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
