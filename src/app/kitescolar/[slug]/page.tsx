import { AddToCartButton } from '@/components/add-to-cart-button'
import { api } from '@/data/api'
import type { Product } from '@/data/types/products'
import { Metadata } from 'next'

import Image from 'next/image'

interface ProductProps {
  params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  return { title: product.title }
}

export default async function ProductPage({ params }: ProductProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  return (
    <div className="relative lg:grid  lg:grid-cols-3 gap-4 flex md:items-center flex-col pt-[100px] overflow-hidden">
      <div className="lg:col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className=""
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed">{product.description}</p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-primary px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm">
            Em até 12x s/ juros de
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <AddToCartButton
          productId={product.id}
          price={product.price}
          slug={product.slug}
          title={product.title}
          image={product.image}
          description={product.description}
          quantity={product.quantity}
        />
      </div>
    </div>
  )
}
