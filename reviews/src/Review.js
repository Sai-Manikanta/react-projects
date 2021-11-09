import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkIndex = (index) => {
        if(index > people.length - 1){
            return 0
        }
        if(index < 0){
            return people.length - 1
        }
        return index
    }

    const nextPerson = () => {
        setIndex(index => {
            return checkIndex(index + 1);
        })
    }

    const prevPerson = () => {
        setIndex(index => {
            return checkIndex(index - 1);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkIndex(randomNumber));
    }

    return (
        <div className="max-w-lg mx-auto bg-white mt-16 text-center p-6 rounded shadow-lg">
            <div className="w-36 h-36 rounded-full bg-blue-400 relative mx-auto select-none">
                <img src={image} alt={name} className="w-full h-full object-cover absolute top-1 right-2 rounded-full" />
                <div className="bg-blue-500 inline-block p-3 text-white rounded-full absolute left-0">
                    <FaQuoteRight />
                </div>
            </div>
            <h2 className="mt-4 font-semibold capitalize select-none">{name}</h2>
            <p className="text-blue-400 mt-1 select-none">{job}</p>
            <p className="text-gray-600 text-sm mt-2 select-none">{text}</p>
            <div className="mt-4">
                <button onClick={nextPerson} className="text-xl text-blue-400 mx-1">
                    <FaChevronLeft />
                </button>
                <button onClick={prevPerson} className="text-xl text-blue-400 mx-1">
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={randomPerson} className="mt-2 py-1 px-2 rounded bg-blue-100 text-blue-400 text-sm select-none">
                Suprice Me
            </button>
        </div>
    )
}

export default Review
