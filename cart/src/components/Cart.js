import CartItem from "./CartItem";
import { useCartContext } from '../contexts/CartContext';

function Cart() {
    const { products, dispatch } = useCartContext();

    const totalAmount = products.reduce((totalPrice, product) => {
        return totalPrice += product.amount * product.price;
    },0);

    return (
        <section className="max-w-2xl mx-auto py-16 px-4">
            <p className="text-3xl text-center mb-6 font-bold text-gray-800 tracking-wider">
                Your Bag
            </p>
            
            {/* rendering all products */}
            {products.length === 0 ? (
                <p className="text-center text-2xl">is currently empty</p>
            ) : (
                <>
                    {products.map(product => <CartItem key={product.id} {...product} /> )}
                    <div className="flex justify-between border-t-2 py-3 border-blue-400">
                        <span>Total</span>
                        <span>{totalAmount}</span>
                    </div>
                    <button 
                        className="text-red-500 border border-red-500 px-3 py-1 text-sm rounded block mx-auto"
                        onClick={() => dispatch({ type: 'CLEAR' })}
                    >
                        CLEAR CART
                    </button>
                </>
            )}
        </section>
    )
}

export default Cart
