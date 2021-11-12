import { BsFillCaretUpFill, BsFillCaretDownFill  } from 'react-icons/bs'
import { useCartContext } from '../contexts/CartContext'
import axios from '../utils/axios'

function CartItem({ id, title, price, img, amount }) {
    const { dispatch } = useCartContext();

    const deleteProduct = id => {
        axios.delete(`/cart/${id}`)
            .then(res => {
                dispatch({ type: 'DELETE', payload: id })
            })
            .catch(err => {
                dispatch({ type: 'ERROR', payload: err })
            })
    }

    const increaseProductQuantity = (id, currentQuantity, type) => {
        const patchObject = type === 'increase' ? { amount: currentQuantity + 1 } : { amount: currentQuantity - 1 };
        const actionObject = type === 'increase' ? { type: 'INCREASE', payload: id } : { type: 'DECREASE', payload: id };
        axios.patch(`/cart/${id}`, patchObject)
            .then(res => {
                dispatch(actionObject);
            })
            .catch(err => {
                dispatch({ type: 'ERROR', payload: err });
            })
    }

    return (
        <article className="flex justify-between items-center p-2 mb-4">
            <img src={img} className="h-20" alt="mobile" />
            <div className="flex-grow">
                <h2 className="text-lg">{title}</h2>
                <p className="text-gray-500">{price}</p>
                <button 
                    onClick={() => deleteProduct(id)}
                    className="text-blue-400 tracking-widest text-sm"
                >
                    remove
                </button>
            </div>
            <div className="flex flex-col items-center">
                <button onClick={() => increaseProductQuantity(id, amount, 'increase')}>
                    <BsFillCaretUpFill size="1.5rem" className="text-blue-500" />
                </button>
                <p className='amount'>{amount}</p>
                <button onClick={() => {
                    if(amount === 1) deleteProduct(id)
                    else increaseProductQuantity(id, amount, 'decrease')
                }}>
                    <BsFillCaretDownFill size="1.5rem" className="text-blue-500" />
                </button>
            </div>
        </article>
    )
}

export default CartItem
