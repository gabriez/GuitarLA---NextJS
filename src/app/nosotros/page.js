import Image from "next/image"
import '../styles/nosotros.css'

export const metadata = {
  title: 'GuitarLa - Sobre nosotros',
  description: 'Venta de guitarra, cursos, blogs'
}

const Page = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido" >
          <Image fill={true} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />
          <div>
            <p>
              Aliquam non convallis arcu. Praesent nec velit eu justo dictum faucibus. 
              Aliquam iaculis consequat risus. Sed cursus, diam ut vestibulum gravida, metus metus finibus diam, quis finibus augue elit eu urna. 
              Cras ut arcu aliquam, facilisis mi eu, elementum odio. Nam congue fringilla suscipit. Nullam aliquet in risus sit amet posuere. 
            </p>  

            <p>
              Aliquam non convallis arcu. Praesent nec velit eu justo dictum faucibus. 
              Aliquam iaculis consequat risus. Sed cursus, diam ut vestibulum gravida, metus metus finibus diam, quis finibus augue elit eu urna. 
              Cras ut arcu aliquam, facilisis mi eu, elementum odio. Nam congue fringilla suscipit. Nullam aliquet in risus sit amet posuere. 
            </p>
        </div>
      </div>
    </main>
  )
}

export default Page
