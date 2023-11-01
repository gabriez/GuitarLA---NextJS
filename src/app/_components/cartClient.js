'use client';
import LayoutContent from '@/app/_components/layout'
import { useCartContext } from "@/context/contextCart";
import { useState, useEffect } from "react";
import styles from '@/app/styles/cart.module.css'

const CartClient = () => {
    const {dispatch, cartItems} = useCartContext();
    const [total, setTotal] = useState(0)
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setLoaded(true)
    }, [])

    useEffect(()=> {
        const suma = cartItems.reduce((acumulador, item) => acumulador + (item.quantity * item.price), 0)
        setTotal(suma)
    }, [cartItems])
    return loaded ? (
        <LayoutContent title={'Carrito de Compra'} conditional={'main'}>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h3>Artículos</h3>
                    {cartItems?.length === 0 ? 'No hay productos en el carrito' : 
                    cartItems?.map( producto => (
                    <div className={styles.producto} key={producto.id}>
                        <div>
                            <img src={producto.image} alt={`Imagen del producto ${producto.name}`} />
                        </div>
                        <div>
                            <p className={styles.nombre}>{producto.name}</p>
                            <p>Cantidad: </p>
                            <select 
                            value={producto.quantity}
                            onChange={e => {
                                dispatch({
                                    type: 'UPDATE',
                                    id: producto.id,
                                    quantity: parseInt(e.target.value)
                                })
                            }}
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <p className={styles.precio}>Precio: $<span>{producto.price}</span></p>
                            <p className={styles.subtotal}>Subtotal: $<span>{producto.price * producto.quantity}</span></p>
                        </div>
                        <button type="button" className={styles.btn_eliminar} onClick={() => dispatch({type: 'DELETE',
                                    id: producto.id})}>
                            X
                        </button>
                    </div>
                ))}
                </div>

                <aside className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: ${total}</p>
                </aside>
            </div>      
        </LayoutContent>    
  ) : null
}

export default CartClient
