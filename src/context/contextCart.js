"use client";
import { useReducer, createContext, useContext } from "react"


const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
} 


const reducer = (state, action) => {
    switch(action.type){
        case "ADD":{
            if (state.some(item => item.id === action.item.id)) {
                const newCart = state.map(item => {
                    if (item.id === action.item.id) {
                        item.quantity = action.item.quantity;
                    } 
                    return item;
                });
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart
            } else {
                localStorage.setItem('cart', JSON.stringify([...state, action.item]));
                return [...state, action.item];
            }}
        case "UPDATE":{
            const newCart = state.map(item => {
                if (item.id === action.id) {
                    item.quantity = action.quantity;
                } 
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart
        }
        case "DELETE":{
            const deleteCart = state.filter(item => item.id !== action.id);
            localStorage.setItem('cart', JSON.stringify(deleteCart));
            return deleteCart
        }
        default: 
            return state
    }
}

export const CartProvider = ({children}) => {
    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : [];

    const cartItems = cartLS;
    
    const [state, dispatch] = useReducer(reducer, cartItems);

    return (
        <CartContext.Provider value={
            {
                dispatch,
                cartItems: state
            }
        }>
            {children}
        </CartContext.Provider>
    )
}