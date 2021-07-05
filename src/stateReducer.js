import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {
        case "addEntry": {
            return {
                ...currentState,
                entries: [...currentState.entries, { category: action.category, text: action.text }]
            }
        }
        
        default:
            return currentState
    }
}

export const stateContext = createContext()
