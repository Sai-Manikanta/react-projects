function Tour({ name, price }) {
    return (
        <div className="p-4 border rounded mb-3">
            <h2>{ name }</h2>
            <p>{ price }</p>
        </div>
    )
}

export default Tour
