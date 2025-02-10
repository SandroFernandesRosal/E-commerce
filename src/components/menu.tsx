'use client'
import { useCart } from '@/context/cart-context'
import { AlignRight, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Menu() {
  const { handleMenu, menu, items } = useCart()
  return (
    <>
      {!menu ? (
        <AlignRight
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer text-textsecondary hover:text-secondary"
        />
      ) : (
        <X
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer text-textsecondary hover:text-secondary"
        />
      )}

      <div
        className={`fixed top-[71px] text-textsecondary right-0 z-30 flex min-h-screen w-[70%] bg-primary border-zinc-500 border-[1px] transform rounded-l-xl flex-col items-center  gap-10  font-bold transition-transform duration-300 md:hidden ${
          menu ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <nav className="bg-secondary w-full  justify-center items-center py-2 md:hidden flex gap-2 rounded-l-xl rounded-b-none">
          <FaInstagram className="text-textsecondary hover:text-primary text-xl" />
          <FaWhatsapp className="text-textsecondary hover:text-primary text-xl" />
        </nav>

        <Link
          href="/"
          className="flex items-center gap-2 hover:underline"
          onClick={handleMenu}
        >
          <span className="text-xl">Sandro Fernandes</span>
          <Image
            src="https://github.com/sandrofernandesrosal.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt={'perfil'}
          />
        </Link>

        <Link
          href={'/cart'}
          className="flex items-center gap-2"
          onClick={handleMenu}
        >
          <ShoppingCart />
          <span className="text-xl">Cart ({items.length})</span>
        </Link>

        <nav className="border-t-[1px] border-zinc-400 w-full  justify-center items-center py-2 flex   md:hidden">
          <ul className="flex flex-col justify-between pt-5 gap-4 text-xl text-textsecondary">
            <li className="hover:text-secondary">
              <Link href="/home">Início</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/produtos">Produtos</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
