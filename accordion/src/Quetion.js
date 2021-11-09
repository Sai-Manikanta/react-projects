import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Quetion({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="border p-4 mb-2 shadow-sm rounded">
            <header className="flex justify-between">
                <h1 className="text-xl mr-2">{title}</h1>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p className="mt-2">{info}</p>}
        </article>
    )
}

export default Quetion
