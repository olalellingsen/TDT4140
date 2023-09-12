import { createContext, useReducer } from 'react'

export const ExerciseCtx = createContext()

export const exerciseReducer = (state, action) => {
    switch (action.type) {
        case "TEST":
            return {
                exercises: [action.payload]
            }
        case "SET_EXERCISES":
            return { 
                exercises: action.payload 
            }
        case "CREATE_EXERCISE":
            return { 
                exercises: [...state.exercises, action.payload] 
            }
        case "DELETE_EXERCISE":
            return {
                exercises: state.exercises.filter((e) => e._id !== action.payload._id)
            }
        case "EDIT_EXERCISE":

            return {
                exercises: state.exercises.map(function(e) {
                    if(e._id === action.payload._id) {
                        return action.payload
                    }
                    else {
                        return e
                    }
                })
            }
        default:
            return state
    }
}
export const ExerciseCtxProvider = ({children}) => {
    const [state, dispatchExercise] = useReducer(exerciseReducer, { 
        exercises: null
    })
  
    return (
        <ExerciseCtx.Provider value={{...state, dispatchExercise}}>
            {children}
        </ExerciseCtx.Provider>
    )
}