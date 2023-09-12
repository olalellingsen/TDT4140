import { createContext, useReducer, useEffect } from 'react'

export const UaCtx = createContext()

export const uaReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    case "FOLLOW_USER":
      let tempUser = state.user
      tempUser.following = [...tempUser.following, action.payload]
      return {user: tempUser}
    default:
      return state
  }
}

export const UaCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uaReducer, { 
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('User Auth State:', state)
  
  return (
    <UaCtx.Provider value={{ ...state, dispatch }}>
      { children }
    </UaCtx.Provider>
  )

}