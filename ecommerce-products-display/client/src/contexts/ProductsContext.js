import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
    const [count, setCount] = useState(4);
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState(`http://localhost:3000/products?_start=${0}&_end=${4}`);

    useEffect(() => {
        axios.get(url)
          .then(res => setProducts([ ...products, ...res.data ]))
          .catch(err => console.log(err.message))
    }, [count, url])

    

    useEffect(() => {
        setUrl(`http://localhost:3000/products?_start=${count - 4}&_end=${count}`)
    }, [count])

    useEffect(() => {
        if(url.includes('category')){
            console.log('$$$$$$$$$$$$$$$');
            axios.get(url)
             .then(res => setProducts(res.data))
             .catch(err => console.log(err.message))
        }
    }, [url])

    const addCategoryToUrl = (category, checked) => {
        /// http://localhost:3000/products?_start=4&_end=8&category=men%27s%20clothing
        if(checked){
            const newUrl = `${url}&category=${category}`;
            setUrl(newUrl);
        } else {
            // remove category from url string
        }
    }

    return (
        <ProductsContext.Provider value={{ url, setUrl, count, setCount, addCategoryToUrl, products }}>
            { children  }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

