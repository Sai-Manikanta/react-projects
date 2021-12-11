import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
          .then(responce => responce.json())
          .then(data => {
            setData(data);
            setLoading(false);
            setError(false);
          })
          .catch(err => {
            setError(true);
            console.log(err);
          })
    }, [url])

    return { data, loading, error }
}