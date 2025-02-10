import Image from 'next/image'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { ButtonCart } from './button-Cart'
import Link from 'next/link'

interface ProductsProps {
  title: string
}

export default async function Products({ title }: ProductsProps) {
  const response = await api('/products')

  const products = await response.json()

  return (
    <div className="my-10 w-full">
      <h1 className="md:text-2xl text-lg font-bold w-ful flex justify-center my-5">
        {title}
      </h1>

      <div className="flex  flex-wrap w-full  gap-3 justify-center  ">
        {products.map((product: Product) => {
          return (
            <div
              className="w-[47%] max-w-[200px] gap-2 pb-2 flex  flex-col pt-2   rounded-md border-[1px] border-zinc-300"
              key={product.id}
            >
              <div className="border-b-[3px] border-primary p-3">
                <Link href={`/product/${product.slug}`} className="group">
                  {' '}
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.title}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-between   h-full  gap-2 mx-2">
                <Link href={`/product/${product.slug}`}>
                  <p className=" text-center px-1">{product.title}</p>
                </Link>

                <div className="flex flex-wrap justify-evenly">
                  <span className="flex  items-center justify-center rounded-full  text-primary font-bold">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <ButtonCart
                    productId={product.id}
                    price={product.price}
                    slug={product.slug}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    quantity={product.quantity}
                  />
                </div>
              </div>{' '}
            </div>
          )
        })}
      </div>
    </div>
  )
}
