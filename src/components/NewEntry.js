import { useState, useEffect, useContext } from "react"
import { useHistory, useParams } from "react-router-dom"
import { stateContext } from "../stateReducer"

const NewEntry = (props) => {
    const [errorMessage, setErrorMessage] = useState()
    const [entry, setEntry] = useState("")
    const { category_id } = useParams()
    const { categories, dispatch } = useContext(stateContext)
    const category = categories.find(cat => cat.id == category_id)
    const history = useHistory()

    useEffect(() => {
        category ? setErrorMessage(null) : setErrorMessage("Invalid category")
    }, [category_id, category])

    const submit = (event) => {
        event.preventDefault()
        dispatch({
            type: "addEntry",
            category: category_id,
            text: entry
        })
        history.push("/")
    }

    return (
        <div>
            {errorMessage ? (
                <h4 style={{ color: "red" }}>{errorMessage}</h4>
            ) : (
                <>
                    <h1>New Entry in Category: {category.name}</h1>
                    <form onSubmit={submit}>
                        <div>
                            <textarea onChange={(e) => setEntry(e.target.value)} value={entry} />
                        </div>
                        <button type="submit">Create Entry</button>
                    </form>
                </>
            )
            }
        </div >
    )
}

export default NewEntry
