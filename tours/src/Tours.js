import React, { useEffect, useState } from 'react'
import Tour from './Tour';

function Tours() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const getTours = async () => {
        try {
            const responce = await fetch('https://course-api.com/react-tours-project');
            const data = await responce.json();
            setTours(data);
            setLoading(false);
        } catch(err) {
            setLoading(false);
            console.log(err);
        }
    }

    useEffect(() => {
        getTours();
    }, [])

    if(loading){
        return <p className="text-center font-black tracking-wider text-4xl mt-8">Loading...</p>
    }

    if(tours.length === 0){
        return (
            <button onClick={getTours} className="text-blue-500 border-blue-500 rounded text-sm border block px-3 py-1 mt-3 mx-auto">
                Fetch Again
            </button>
        )
    }

    const removeTour = id => {
        const filtedTodos = tours.filter(todo => todo.id !== id);
        setTours(filtedTodos);
    }

    return (
        <>
            {tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={removeTour} />)}
        </>
    )
}

export default Tours
