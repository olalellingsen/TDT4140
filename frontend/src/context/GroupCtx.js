import { createContext, useReducer } from 'react'

export const GroupCtx = createContext()



export const groupReducer = (state, action) => {
    switch (action.type) {
        case "SET_GROUPS":
            return {
                groups: action.payload
            }
        case "CREATE_GROUP":
            return { 
                groups: [...state.groups, action.payload] 
            }
        // case "DELETE_GROUP":
        //     return {
        //         groups: state.groups.filter((e) => e._id !== action.payload._id)
        //     }
        default:
            return state
    }
}
export const GroupCtxProvider = ({children}) => {
    const [state, dispatchGroup] = useReducer(groupReducer, { 
        groups: null
    })
  
    return (
        <GroupCtx.Provider value={{...state, dispatchGroup}}>
            {children}
        </GroupCtx.Provider>
    )
}