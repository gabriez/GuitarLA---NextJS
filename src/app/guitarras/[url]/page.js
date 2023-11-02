'use server'
import Form from "@/app/_components/guitars/form";
import { getGuitar} from "@/app/_lib/api_helper";
import LayoutContent from "@/app/_components/layout";
import { notFound } from "next/navigation";


export async function generateMetadata({ params}) {
  // read route params
  const id = params.url
  return {
      title:  `GuitarLA - ${id}`,
      description: `Guitarras, venta de guitarras, guitarra ${id}`,
    }
}

const GuitarUrl = async ({params}) => {
  const guitarData = await getGuitar(params.url);
  if (guitarData.data.length === 0) {
    notFound();
  }

  const {name, description, image, price} = guitarData.data[0].attributes;
  const imageDestructured = image.data.attributes.url; 

  const dataForm = {
    id: guitarData.data[0].id,
    name,
    description,
    price, 
    image: imageDestructured
  }

  return (
    <main className="contenedor guitarra">
      <img src={imageDestructured} alt={`Imagen de la guitarra ${name}`} className="imagen" /> 
      <LayoutContent title={name} conditional={'main'}>
        <p className="texto"> {description} </p> 
        <p className="price"> ${price} </p> 
        <Form guitarData={dataForm}/>
      </LayoutContent>
    </main>
  )
}

export default GuitarUrl
