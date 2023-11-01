import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './_components/header'
import Footer from './_components/footer'
import {CartProvider} from '@/context/contextCart'

const outfit = Outfit({ 
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'GuitarLA - Inicio',
  description: 'GuitarLA, blog, tienda de guitarras, venta de guitarras, cursos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/>
      </head>
      <body className={outfit.className}>
        <Header/>
        <CartProvider>        
          {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  )
}
