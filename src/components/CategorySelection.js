import { Link } from "react-router-dom"

const CategorySelection = (props) => {
    return (
        <div>
            <h1>Category Selection</h1>
            <ul>
                {props.categories.map((cat, index) => (
                    <li key={index}>
                        <Link to={`/entry/new/${index}`}>{cat}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategorySelection
