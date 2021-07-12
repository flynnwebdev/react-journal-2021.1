import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {
        case "addEntry": {
            return {
                ...currentState,
                entries: [action.data, ...currentState.entries]
            }
        }

        case "setCategories": {
            return {
                ...currentState,
                categories: action.categories
            }
        }
        
        case "setEntries": {
            return {
                ...currentState,
                entries: action.entries
            }
        }

        case "setToken": {
            localStorage.setItem("token", action.data.token)
            return {
                ...currentState,
                token: action.data.token
            }            
        }
        
        default:
            return currentState
    }
}

export const stateContext = createContext()
