'use client' // Error components must be Client Components
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({ error, reset}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.log(error, '==> ERROR')
  }, [error])
 
  return (
    <div className='contenedor contenido'>
        <h2 className='heading'>¡Algo salió mal!</h2>
        <p> {error.message} </p>
        <button className='btn-notFound'
            onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
            }
        >
            Inténtalo de nuevo
        </button>
        <Link className='btn-notFound' href='/'>Regresa al inicio</Link>
    </div>
  )
}