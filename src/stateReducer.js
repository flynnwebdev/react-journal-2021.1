import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {
        case "addEntry": {
            return {
                ...currentState,
                entries: [...currentState.entries, action.newEntry]
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
        
        default:
            return currentState
    }
}

export const stateContext = createContext()
