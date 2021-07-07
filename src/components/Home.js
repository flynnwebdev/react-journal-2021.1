import { useContext } from "react"
import { stateContext } from "../stateReducer"

const Home = () => {
    const { entries, categories } = useContext(stateContext)
    console.log(entries)

    return (
        <div>
            <h1>Home</h1>
            {categories.map(cat => (
                <>
                    <h2>{cat.name}</h2>
                    {entries.filter(entry => entry.category_id === cat.id).map((entry, index) => (
                        <div key={index}>
                            <p>{entry.content}</p>
                        </div>
                    )
                    )}
                </>
            )
            )}
        </div>
    )
}

export default Home
