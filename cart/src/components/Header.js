import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../contexts/CartContext';

function Header() {
    const { products } = useCartContext();

    const totalProducts = products.reduce((total, product) => {
        return total += product.amount;
    }, 0);

    return (
        <header className="bg-blue-500 shadow">
            <div className="flex justify-between items-center text-3xl px-6 py-4 text-white max-w-4xl mx-auto">
                <h1>Cart</h1>
                <div className="relative">
                    <AiOutlineShoppingCart />
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-white text-sm text-blue-500 absolute -top-2 -right-3">
                        {totalProducts}
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header
