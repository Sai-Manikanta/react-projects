import React, { useState } from 'react';
import data from './data';
import People from './People';

function App() {
    const [people, setPeople] = useState(data);

    return (
        <div className="bg-blue-500 p-1 h-screen text-gray-800">
            <div className="mt-16 bg-white p-6 max-w-md mx-auto rounded shadow-md">
                <h1 className="text-xl">{people.length} birthdays today</h1>
                <People people={people} />
                <button onClick={() => setPeople([])} className="bg-blue-500 text-white w-full py-1.5 rounded">
                    Clear All
                </button>
            </div>
        </div>
    )
}

export default App
