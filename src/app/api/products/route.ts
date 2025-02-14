import { NextResponse } from 'next/server'
import data from './data.json'
import { Product } from '@/data/types/products'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('_limit') || '4')
  const offset = parseInt(searchParams.get('_offset') || '0')

  const products: Product[] = (data.products as Product[]).slice(
    offset,
    offset + limit,
  )

  return NextResponse.json(products)
}
