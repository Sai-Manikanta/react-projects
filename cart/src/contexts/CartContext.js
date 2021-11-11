import { createContext, useReducer, useContext } from 'react'
import data from '../data';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

function productsReducer(state, action){
    switch(action.type){
        case 'DELETE':
            return state.filter(product => product.id !== action.payload.id)
        case 'INCREASE':
            return state.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1 } : product)
        case 'DECREASE':
            return state.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1 } : product)
        case 'CLEAR':
            return [];
        default:
            return state
    }
}

const CartContextProvider = ({ children }) => {
    const [products, dispatch] = useReducer(productsReducer, data);
    return (
        <CartContext.Provider value={{ products, dispatch }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
