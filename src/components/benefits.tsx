'use client'
import { FaRegCreditCard, FaWhatsapp, FaPercent } from "react-icons/fa"
import { TbTruckDelivery } from "react-icons/tb"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Benefits() {

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
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
        ],
      }
    
    return(
        <section className="bg-zinc-300 text-textprimary flex  items-center py-4 my-10 justify-center">
            
            <Slider {...settings} className="w-[80vw] my-5">
                <div className="flex gap-2 items-center   place-items-center  ">
                    <div className="border-[2px] w-22 h-22  flex justify-center items-center  rounded-full border-zinc-700"><TbTruckDelivery className="text-6xl p-1"/></div> 
                    <div className="flex flex-col">
                        <h1 className="font-bold">Frete Grátis Sudeste</h1>
                        <p>Compras acima de R$99,00</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center   place-items-center ">
                    <div className="border-[2px] w-22 h-22 flex justify-center items-center  rounded-full border-zinc-700"><FaRegCreditCard className="text-6xl p-3"/></div> 
                    <div className="flex flex-col">
                        <h1 className="font-bold">Compra Segura com Mercado Pago</h1>
                        <p>Parcele suas compras em até 3x sem juros.</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center   place-items-center ">
                    <div className="border-[2px] w-22 h-22 flex justify-center items-center rounded-full border-zinc-700"><FaPercent className="text-6xl p-3"/></div> 
                    <div className="flex flex-col">
                        <h1 className="font-bold">Desconto 5% com PIX</h1>
                        <p>Aprovação Rápida</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center   place-items-center ">
                    <div className="border-[2px] w-22 h-22 flex justify-center items-center rounded-full border-zinc-700"><FaWhatsapp className="text-6xl p-3"/></div> 
                    <div className="flex flex-col">
                        <h1 className="font-bold">Personalize seu Pedido</h1>
                        <p>Tire suas dúvidas com nossa equipe!</p>
                    </div>
                </div>
                </Slider>
           
           
        </section>
    )
}