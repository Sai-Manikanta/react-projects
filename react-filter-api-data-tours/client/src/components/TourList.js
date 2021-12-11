import { useState } from 'react';
import Tour from './Tour';
import { useFetch } from '../hooks/useFetch';

function TourList() {
    const [url, setUrl] = useState('http://localhost:3004/tours');
    const { data:tours, loading, error } = useFetch(url);

    return (
        <div className="m-6">
            <h1 className="text-3xl font-bold text-center mb-4">Tours</h1>
            <div>
                <button className="btn-primary" onClick={() => setUrl('http://localhost:3004/tours')}>
                    All
                </button>
                <button className="btn-primary" onClick={() => setUrl('http://localhost:3004/tours?type=Historycal')}>
                    Historycal
                </button>
                <button className="btn-primary" onClick={() => setUrl('http://localhost:3004/tours?type=Curious')}>
                    Curious
                </button>
                <button className="btn-primary" onClick={() => setUrl('http://localhost:3004/tours?type=Playfull')}>
                    Playfull
                </button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong!</p>}
            {!loading && tours.map(tour => <Tour key={tour.id} {...tour} />)}
        </div>
    )
}

export default TourList
