import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { stateContext } from "../stateReducer"

export default function Login(props) {
    const [errorMessage, setErrorMessage] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const { dispatch } = useContext(stateContext)

    const submit = async (event) => {
        event.preventDefault()
        const user = { email, password }
        const res = await fetch("http://localhost:4000/api/v1/users/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json()

        if (res.status === 200) {
            dispatch({
                type: "setToken",
                data
            })
        } else {
            setErrorMessage(data.error)
        }
    }

    return (
        <>
            <h1>Login</h1>
            {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
            <form onSubmit={submit}>
                <div>
                    <label>Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
