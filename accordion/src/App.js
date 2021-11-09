import React, { useState } from 'react';
import data from './data'
import Quetion from './Quetion';

function App() {
    const [quetions, setQuetions] = useState(data);

    return (
        <div className="max-w-2xl mx-auto bg-white mt-16 p-4 flex flex-col sm:flex-row rounded">
            <h1 className="mr-4 text-xl sm:text-3xl w-32 mb-2">
                Questions And Answers About Login
            </h1>
            <div>
                {quetions.map(quetion => (
                    <Quetion 
                        key={quetion.id} 
                        title={quetion.title} 
                        info={quetion.info}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
