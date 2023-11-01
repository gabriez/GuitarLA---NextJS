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
                      <LayoutContent title={guitarra?.attributes.name} conditional={'div'}>
                          <p className="description">{guitarra?.attributes.description}</p>
                          <p className="price">${guitarra?.attributes.price}</p>
                          <Link className="enlace" href={`/guitarras/${guitarra?.attributes.url}`}> Ver Producto </Link>
                      </LayoutContent>
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
