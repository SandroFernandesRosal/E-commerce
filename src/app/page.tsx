import Benefits from "@/components/benefits";
import CarouselHighlight from "@/components/carousel-highlight";
import CarouselProducts from "@/components/carousel-products";

import { api } from "@/data/api";

export default async function Home() {
  const response = await api('/products')
  
    const products = await response.json()
  return (
    <div className="min-h-screen pt-[120px] md:pt-[160px] ">
      <CarouselHighlight products={products} />
      <Benefits />
     
      <CarouselProducts products={products} titleproducts="Kit Escolar" page='kitescolar' />
      <CarouselProducts products={products} titleproducts="Maternidade e Bebê" page='maternidadeebebe' />
      <CarouselProducts products={products} titleproducts="Necessaires e Organizadores" page='necessaireseorganizadores' />
     
    </div>
  );
}
