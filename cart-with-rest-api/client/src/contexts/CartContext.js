import { createContext, useReducer, useContext } from 'react'
//import axios from '../utils/axios'

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

function productsReducer(state, action){
    switch(action.type){
        case 'FETCH_CART':
            return { 
                loading: false,  
                data: { 
                    count: action.payload.reduce((total, product) => total += product.amount, 0), 
                    products: action.payload,
                    totalAmount: action.payload.reduce((totalPrice, product) => totalPrice += product.amount * product.price , 0)
                },
                error: null
            }
        case 'ERROR':
            return { ...state, error: action.payload }
        case 'DELETE':
            const deletedProduct = state.data.products.find(product => product.id === action.payload);
            const amount = deletedProduct.amount;
            const price = amount * deletedProduct.price;
            
            return {
                ...state,
                data: {
                    count: state.data.count - amount,
                    products: state.data.products.filter(product => product.id !== action.payload),
                    totalAmount: state.data.totalAmount - price
                }
            }
        case 'INCREASE':
            const updateProductIncrease = state.data.products.find(product => product.id === action.payload);

            return {
                ...state,
                data: {
                    count: state.data.count + 1,
                    products: state.data.products.map(product => product.id === action.payload ? { ...product, amount: product.amount + 1 } : product),
                    totalAmount: state.data.totalAmount + updateProductIncrease.price
                }
            }
        case 'DECREASE':
            const updateProductDecrease = state.data.products.find(product => product.id === action.payload);

            return {
                ...state,
                data: {
                    count: state.data.count + 1,
                    products: state.data.products.map(product => product.id === action.payload ? { ...product, amount: product.amount - 1 } : product),
                    totalAmount: state.data.totalAmount - updateProductDecrease.price
                }
            }
        default:
            return state
    }
}

const CartContextProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(productsReducer, {
        loading: true,
        data: { count: 0, products: [], totalAmount: 0 },
        error: null
    });

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
