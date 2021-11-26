import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext';

function Sidebar() {
    const { addCategoryToUrl } = useContext(ProductsContext);

    const handleChange = e => {
        const category = e.target.id;
        const checked = e.target.checked;
        addCategoryToUrl(category, checked);
    }

    return (
        <div className="border mr-4">
            <div>
                <input type="checkbox" id="men's clothing" onChange={handleChange} />
                <label htmlFor="men's clothing">Men's clothing</label>
            </div>
            <div>
                <input type="checkbox" id="jewelery" onChange={handleChange} />
                <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div>
                <input type="checkbox" id="electronics" onChange={handleChange} />
                <label htmlFor="men's clothing">Electronics</label>
            </div>
            <div>
                <input type="checkbox" id="women's clothing" onChange={handleChange} />
                <label htmlFor="women's clothing">Women's clothing</label>
            </div>
        </div>
    )
}
// men's clothing, jewelery, electronics, women's clothing
export default Sidebar
