'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
 
export default function NotFound() {
const router = useRouter();
  return (
    <div className='contenedor contenido error'>
      <h3 className='heading'>No encontrado</h3>
      <p>El recurso solicitado no pudo ser encontrado</p>
      <button className='btn-notFound' onClick={()=> {
        router.back();
      }}>Retorna a la página anterior</button>
    </div>
  )
}