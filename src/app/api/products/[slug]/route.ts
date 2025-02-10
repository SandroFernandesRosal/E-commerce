import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { slug } = await params
  const slugParsed = z.string().parse(slug)
  const product = data.products.find((product) => product.slug === slugParsed)

  if (!product) {
    return NextResponse.json({ message: 'Product not found.' }, { status: 400 })
  }

  return NextResponse.json(product)
}
