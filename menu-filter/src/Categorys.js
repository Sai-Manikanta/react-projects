function Categorys({ categorys, filterRecipes }) {
    return (
        <nav className="flex justify-center mt-3 py-2">
            {categorys.map((category, index) => (
                <button key={index} onClick={() => filterRecipes(category)} className="mx-3 border border-green-500 text-green-500 rounded py-1 px-3 text-sm">
                    { category }
                </button>
            ))} 
        </nav>
    )
}

export default Categorys
