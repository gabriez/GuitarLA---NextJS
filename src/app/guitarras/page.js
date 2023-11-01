import ListGuitars from "../_components/guitars/listGuitars";
import { getGuitars } from "../_lib/api_helper";

export const metadata = {
  title: 'GuitarLA - Tienda de Guitarras',
  description: 'GuitarLA - Nuestra colección de guitarras'
}

const LayoutGuitars = async ({children}) => {
  const guitars = await getGuitars();
  return (
      <ListGuitars guitars={guitars.data}/>
  )
}

export default LayoutGuitars