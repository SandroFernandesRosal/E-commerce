'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/types/products'
import { useCart } from '@/context/cart-context'

export default function CarouselHighlight({
  products,
}: {
  products: Product[]
}) {
  const { closeMenu } = useCart()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <section
      className="highligt text-textprimary flex flex-col  items-center py-4 mb-5 justify-center w-full my-5"
      onClick={() => closeMenu()}
    >
      <div className="flex w-full  gap-3 justify-center">
        <Slider {...settings} className="w-[80%]">
          {products.map((product: Product) => {
            return (
              <div
                className="flex flex-col h-full   overflow-hidden border-[1px] border-zinc-300 p-5 rounded-lg"
                key={product.id}
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="group  flex justify-center items-center md:h-[400px] "
                >
                  {' '}
                  <Image
                    src={product.image}
                    width={900}
                    height={500}
                    alt={product.title}
                    priority
                    className="group-hover:scale-105 transition-transform duration-500 object-cover md:w-[500px]  object-center rounded-lg "
                  />
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
