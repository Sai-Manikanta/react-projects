import React, { useState } from 'react';

function Tour({ tour, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    const { id, image, name, info, price } = tour;

    return (
        <article className="max-w-xl mx-4 sm:mx-auto my-9 bg-white rounded overflow-hidden">
            <img src={image} alt={name} className="h-80 w-full object-cover" />
            <div className="p-3 sm:p-8 sm:pb-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="sm:text-lg">{name}</h2>
                    <p className="bg-blue-100 text-blue-400 py-0.5 px-2 font-bold rounded">${price}</p>
                </div>
                <p>
                    {readMore ? info : info.substring(0, 240) + '...'}
                    <button onClick={() => setReadMore(!readMore)} className="text-blue-400 mx-2">
                        {readMore ? 'Read less' : 'Read more'}
                    </button>
                </p>
                <button onClick={() => removeTour(id)} className="text-red-500 border-red-500 rounded text-sm border block px-3 py-1 mt-3 mx-auto">
                    Not Intrested
                </button>
            </div>
        </article>
    )
}

export default Tour
