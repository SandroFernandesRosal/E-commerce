import Link from 'next/link'
import Newsletter from './newsletter'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-primary items-center  py-4 text-textsecondary">

      <Newsletter />
      <Link
            href="/"
          >
            <Image src="/logo.png" height={40} width={140} alt='logo - Flaga' />
          </Link>
      
      
    </footer>
  )
}
