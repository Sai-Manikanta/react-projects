import React, { useState } from 'react'
import Categorys from './Categorys';
import data from './data';
import Recipe from './Recipe';

let categorysArray = ['all', ...new Set(data.map(recipe => recipe.category))];

function App() {
    const [recipes, setRecipes] = useState(data);
    const [categorys, setCategorys] = useState(categorysArray);

    const filterRecipes = (category) => {
        if(category === 'all'){
            setRecipes(data);
            return;
        }
        const filteredRecipes = data.filter(recipe => recipe.category === category);
        setRecipes(filteredRecipes);
    }

    return (
        <div className="px-8">
            <h1 className="mt-16 text-center text-4xl font-bold text-gray-800">
                Our Menu
            </h1>
            <span className="border-2 mt-3 w-20 border-green-400 block mx-auto"></span>
            <Categorys categorys={categorys} filterRecipes={filterRecipes} />
            
            <div className="mt-6 grid sm:grid-cols-2">
                {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
            </div>
        </div>
    )
}

export default App
