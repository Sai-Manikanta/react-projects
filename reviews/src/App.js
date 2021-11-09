import Review from './Review';

function App() {
    return (
        <div className="px-8">
            <h1 className="mt-16 text-center text-4xl font-bold text-gray-800">
                Our Reviews
            </h1>
            <span className="border-2 mt-3 w-20 border-blue-400 block mx-auto"></span>
            <Review />
        </div>
    )
}

export default App
