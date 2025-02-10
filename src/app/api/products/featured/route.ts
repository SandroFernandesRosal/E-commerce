import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 10000))
  const featuredProducts = data.products.filter((product) => product.featured)
  return Response.json(featuredProducts)
}