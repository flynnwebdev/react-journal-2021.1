const Home = ({ categories, entries }) => {
    return (
        <div>
            <h1>Home</h1>
            {entries.map((entry, index) => (
                <div key={index}>
                    <h2>{categories[entry.category]}</h2>
                    <p>{entry.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
