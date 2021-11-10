import React, { useState, useEffect } from 'react'

function App() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    const getPeople = async () => {
        setLoading(true);
        try {
            const responce = await fetch('https://course-api.com/react-tabs-project');
            const peopleData = await responce.json();
            setPeople(peopleData);
            setLoading(false);
        } catch(err) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPeople();
    }, [])

    return (
        <div className="px-8">
            <h1 className="mt-16 text-center text-4xl font-bold text-gray-800">
                Experience
            </h1>
            <span className="border-2 mt-3 w-20 border-blue-400 block mx-auto mb-8"></span>

                {loading ? <p className="text-3xl font-bold text-center">Loading...</p> : (
                    <div className="flex flex-col sm:flex-row text-gray-800">
                        <div className="mr-8 flex justify-center sm:justify-start sm:flex-col space-x-6 sm:space-x-0">
                            {people.map((person, i) => (
                                <button onClick={() => setIndex(i)} className={`border-b-2 border-white py-3 mb-2 ${i === index && 'border-green-500 text-green-500'}`}>
                                    {person.company}
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 sm:mt-0">
                            <h2 className="text-3xl">{people[index].title}</h2>
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm inline-block my-2">{people[index].company}</span>
                            <p>{people[index].dates}</p>
                            <ul className="mt-4">
                                {people[index].duties.map((text, index) => <li key={index} className="mb-3">{text}</li>)}
                            </ul>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default App
