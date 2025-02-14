import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { LoadMoreButton } from './loadmore-button'

interface ProductsProps {
  title: string
}

export default async function Products({ title }: ProductsProps) {
  const response = await api('/products?_limit=4&_offset=0')
  const initialProducts: Product[] = await response.json()

  return <LoadMoreButton initialProducts={initialProducts} title={title} />
}
