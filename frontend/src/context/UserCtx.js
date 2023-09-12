import { createContext, useReducer } from 'react'

export const UserCtx = createContext()

export const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return { 
                users: action.payload 
            }
        case "FOLLOW_USER":
            return { 
                users: [...state.users, action.payload] 
            }

        default:
            return state
    }
}

export const UserCtxProvider = ({children}) => {
    const [state, dispatchUser] = useReducer(userReducer, { 
        users: null
    })

  
    return (
        <UserCtx.Provider value={{...state, dispatchUser}}>
            {children}
        </UserCtx.Provider>
    )
}
