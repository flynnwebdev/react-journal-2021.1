import { useContext } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"

const CategorySelection = (props) => {
    const { categories } = useContext(stateContext)

    return (
        <div>
            <h1>Category Selection</h1>
            <ul>
                {categories.map(cat => (
                    <li key={cat.id}>
                        <Link to={`/entry/new/${cat.id}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategorySelection
