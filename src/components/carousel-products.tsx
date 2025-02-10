'use client'
import { FaPlus } from 'react-icons/fa'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ButtonCart } from './button-Cart'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/types/products'

export default function CarouselProducts({
  products,
  titleproducts,
  page,
}: {
  products: Product[]
  titleproducts: string
  page: string
}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <section className=" text-textprimary flex flex-col  items-center py-4 mb-5 justify-center">
      <div className="flex gap-2 items-center justify-between px-2 w-[80vw]">
        <h1 className="md:text-3xl w-full font-bold">{titleproducts}</h1>
        <Link
          href={`/${page}`}
          className="font-bold md:text-lg w-full justify-end flex items-center gap-2"
        >
          <span>Ver todos</span> <FaPlus />
        </Link>
      </div>

      <div className="flex w-full  gap-3 justify-center">
        <Slider {...settings} className="w-[80vw] my-5 gap-2">
          {products.map((product: Product) => {
            return (
              <div
                className=" justify-between  flex  flex-col   rounded-md border-[1px]  border-zinc-300"
                key={product.id}
              >
                <div className="border-b-[3px] border-primary  pb-2">
                  <Link href={`/${page}/${product.slug}`} className="group">
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
                <div className="flex flex-col my-2 min-h-[100px] md:min-h-[70px] gap-2 justify-between">
                  <Link href={`/${page}/${product.slug}`}>
                    <p className=" text-center px-1">{product.title}</p>
                  </Link>

                  <div className="flex flex-wrap justify-evenly px-2 gap-2">
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
        </Slider>
      </div>
    </section>
  )
}
