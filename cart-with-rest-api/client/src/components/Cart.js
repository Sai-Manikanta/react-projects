import { useEffect } from 'react'
import CartItem from "./CartItem";
import { useCartContext } from '../contexts/CartContext';
import axios from '../utils/axios'

function Cart() {
    const { cart, dispatch } = useCartContext();

    useEffect(() => {
        axios.get('/cart')
            .then(res => dispatch({ type: 'FETCH_CART', payload: res.data }))
            .catch(err => dispatch({ type: 'ERROR', payload: err }))
    }, [dispatch])

    if(cart.loading) {
        return <p className="text-center text-2xl mt-8">Loading...</p>
    }

    return (
        <section className="max-w-2xl mx-auto py-16 px-4">
            <p className="text-3xl text-center mb-6 font-bold text-gray-800 tracking-wider">
                Your Bag
            </p>
            
            {cart.data.products.length === 0 ? (
                <p className="text-center text-2xl">is currently empty</p>
            ) : (
                <>
                    {cart.data.products.map(product => <CartItem key={product.id} {...product} /> )}
                    <div className="flex justify-between border-t-2 py-3 border-blue-400">
                        <span>Total</span>
                        <span>{Math.floor(cart.data.totalAmount)}</span>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart
