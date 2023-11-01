"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


const Navigate = () => {
    const location = usePathname();
    const setActive = (path) => {
        return location.pathname === path ? "active" : '';
    }

  return (
    <div className="navegacion">
        <Link href='/' className={setActive('/')}>Inicio</Link>
        <Link href='/nosotros' className={setActive('/nosotros')}>Nosotros</Link>
        <Link href='/guitarras' className={setActive('/guitarras')}>Tienda</Link>
        <Link href='/posts' className={setActive('/posts')}>Blog</Link>
        <Link href='/cart' className={setActive('/cart')}>
          <Image width={20} height={20} src='/img/carrito.png' alt="Carrito"/>
        </Link>
        
    </div>
  )
}

export default Navigate
