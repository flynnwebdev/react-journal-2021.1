import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

const NewEntry = (props) => {
    const [errorMessage, setErrorMessage] = useState()
    const [entry, setEntry] = useState("")
    const { category_id } = useParams()
    const category = props.categories[category_id]
    const history = useHistory()

    useEffect(() => {
        category ? setErrorMessage(null) : setErrorMessage("Invalid category")
    }, [category_id, category])

    const submit = (event) => {
        event.preventDefault()
        props.addEntry(category_id, entry)
        history.push("/")
    }

    return (
        <div>
            {errorMessage ? (
                <h4 style={{ color: "red" }}>{errorMessage}</h4>
            ) : (
                <>
                    <h1>New Entry in Category: {props.categories[category_id]}</h1>
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
