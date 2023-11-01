"use client";
import { useCartContext } from "@/context/contextCart";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = ({guitarData}) => {
  const [quantity, setQuantity] = useState(0)
  const {dispatch} = useCartContext();
  const router = useRouter();
  const handleSubmit = e => {
    e.preventDefault();

    if(quantity < 1) {
      alert('Debes seleccionar una cantidad');
      return;
    }
    const cartItem = {
      ...guitarData,
      quantity
    }

    dispatch({
      type: 'ADD',
      item: cartItem
    });

    router.push('/cart');
    // console.log('/cart')
  }
  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label htmlFor="cantidad">Cantidad</label>
      <select 
      value={quantity}
      onChange={e => setQuantity(parseInt(e.target.value))}
      name="cantidad" id="cantidad">
        <option value="0">--Seleccione--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input value='Agregar al carrito' type="submit"/>
    </form>
  )
}

export default Form
