import { useContext } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"

const CategorySelection = (props) => {
    const { categories } = useContext(stateContext)

    return (
        <div>
            <h1>Category Selection</h1>
            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>
                        <Link to={`/entry/new/${index}`}>{cat}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategorySelection
