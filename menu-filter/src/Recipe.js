function Recipe({ recipe }) {
    const { img, title, desc } = recipe;

    return (
        <div className="max-w-md mx-auto mb-10 flex flex-col sm:flex-row">
            <img src={img} alt={title} className="h-48 sm:h-44 w-full sm:w-48 object-cover rounded border-4 border-green-400" />
            <div className="px-4">
                <h2 className="py-2 border-b border-dotted border-black">{title}</h2>
                <p className="my-2 text-sm text-gray-600">{desc}</p>
            </div>
        </div>
    )
}

export default Recipe
