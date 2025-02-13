import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { Metadata } from 'next'
import { ButtonCart } from '@/components/button-Cart'

interface SearchProps {
  searchParams: Promise<{ q: string }>
}

export const metadata: Metadata = {
  title: 'Buscando produtos',
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = await searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4 pt-[150px] px-8 min-h-screen pb-10">
      <p className="text-sm text-center">
        Resultado Para: <span className="font-semibold">{query}</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => {
          return (
            <div
              className=" w-[47%] max-w-[200px] gap-2 pb-2 flex  flex-col pt-2  lg:w-[200px] rounded-md border border-zinc-300"
              key={product.id}
            >
              <div className="border-b-[3px] border-primary  pb-2">
                <Link href={`/product/${product.slug}`} className="group">
                  {' '}
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.title}
                    className="group-hover:scale-105 transition-transform duration-500 "
                  />
                </Link>
              </div>
              <Link href={`/product/${product.slug}`}>
                <p className=" text-center px-1">{product.title}</p>
              </Link>
              <div className="flex flex-col  md:flex-row justify-end md:items-end h-full md:justify-evenly gap-2 mx-2 items-center">
                <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
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
              </div>{' '}
            </div>
          )
        })}
      </div>
    </div>
  )
}
