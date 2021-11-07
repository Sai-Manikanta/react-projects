function People({ people }) {
    return (
        <>
            {people.map(person => {
                const { id, image, name, age } = person;
                return (
                    <article key={id} className="flex items-center my-6">
                        <img src={image} alt={name} className="w-20 h-20 mr-4 object-cover rounded-full" />
                        <div>
                            <h4 className="font-semibold">{name}</h4>
                            <p className="text-sm text-gray-500">{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default People
