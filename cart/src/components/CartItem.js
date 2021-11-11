import { BsFillCaretUpFill, BsFillCaretDownFill  } from 'react-icons/bs'
import { useCartContext } from '../contexts/CartContext'

function CartItem({ id, title, price, img, amount }) {
    const { dispatch } = useCartContext();

    return (
        <article className="flex justify-between items-center p-2 mb-4">
            <img src={img} className="h-20" alt="mobile" />
            <div className="flex-grow">
                <h2 className="text-lg">{title}</h2>
                <p className="text-gray-500">{price}</p>
                <button 
                    onClick={() => dispatch({ type: 'DELETE', payload: { id } })} 
                    className="text-blue-400 tracking-widest text-sm"
                >
                    remove
                </button>
            </div>
            <div className="flex flex-col items-center">
                <button onClick={() => dispatch({ type: 'INCREASE', payload: { id } })}>
                    <BsFillCaretUpFill size="1.5rem" className="text-blue-500" />
                </button>
                <p className='amount'>{amount}</p>
                <button onClick={() => {
                    if(amount === 1) dispatch({ type: 'DELETE', payload: { id } })
                    else dispatch({ type: 'DECREASE', payload: { id } })
                }}>
                    <BsFillCaretDownFill size="1.5rem" className="text-blue-500" />
                </button>
            </div>
        </article>
    )
}

export default CartItem
