import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import Menu from './menu'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <div
      className={`w-full z-40   flex flex-col items-center justify-center bg-primary px-2 md:px-0  fixed`}
    >
      <nav className="bg-secondary w-full  justify-center items-center py-2 hidden md:flex gap-2">
        <FaInstagram className="text-textsecondary text-xl" />
        <FaWhatsapp className="text-textsecondary text-xl" />
      </nav>

      <div className="flex items-center justify-around  w-full h-full py-4">
        <div className="md:flex items-center hidden">
          <Link href="/">
            <Image
              src="/logo.png"
              height={100}
              width={140}
              quality={100}
              priority
              alt="logo - Flaga"
            />
          </Link>
        </div>

        <div className="hidden md:flex w-full max-w-[600px]">
          <SearchForm />
        </div>

        <div className="flex items-center gap-4 justify-evenly w-full md:w-fit">
          <Link
            href="/"
            className="md:flex items-center hover:underline hidden"
          >
            <span className="text-sm md:hidden">Sandro Fernandes</span>
            <Image
              src="https://github.com/sandrofernandesrosal.png"
              className="h-6 w-6 rounded-full"
              width={24}
              height={24}
              alt={'perfil'}
            />
          </Link>

          <CartWidget />
          <div className="md:hidden items-center flex">
            <Link href="/">
              <Image
                src="/logo.png"
                height={40}
                width={140}
                alt="logo - Flaga"
              />
            </Link>
          </div>
          <Menu />
        </div>
      </div>

      <nav className="border-t-[1px] border-zinc-400 w-full  justify-center items-center py-2 hidden md:flex">
        <ul className="flex gap-4 text-xl text-textsecondary">
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

      <div className="flex md:hidden mb-4 w-full px-5">
        <SearchForm />
      </div>
    </div>
  )
}
