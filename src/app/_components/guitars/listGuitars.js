import LayoutContent from "../layout"
import Link from "next/link"
import '@/app/styles/guitarra.css'
import Image from "next/image"
const ListGuitars = ({guitars}) => {

  return (

    <LayoutContent title={'Nuestra colección'} conditional={'main'}>
        {
          guitars?.length && (
            <div className="guitarras-grid">
              {
                guitars.map( guitarra => {
                  const showImage = guitarra?.attributes.image.data.attributes.formats.medium.url;
                  return (
                    <div className="guitarra" key={guitarra?.id}>
                      <Image width={1000} height={1000} src={showImage} alt={`Imagen de ${guitarra?.attributes.name}`} />
                      <main className="contenido">
                          <h3> {guitarra?.attributes.name}</h3>
                          <p className="description">{guitarra?.attributes.description}</p>
                          <p className="price">${guitarra?.attributes.price}</p>
                          <Link className="enlace" href={`/guitarras/${guitarra?.attributes.url}`}> Ver Producto </Link>
                      </main>
                    </div>
                  )
                })
              }
            </div>
          )
        } 
      </LayoutContent>

  )
}

export default ListGuitars
