import React from 'react'
import {  useEffect } from "react"
import { useUaCtx } from "../../hooks/useUaCtx"
import { useExerciseCtx } from "../../hooks/useExerciseCtx"


import './createSession.css'

//components
import Dropdown from '../dropdown/Dropdown'


const CreateSession = () => {

  const {exercises, dispatchExercise} = useExerciseCtx()
  const { user } = useUaCtx()
  //const [share, setIsShared] = useState(session?.share || false);







  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("api/exercises/")
      const json = await response.json()

      if (response.ok) {
        dispatchExercise({type: "SET_EXERCISES", payload: json})
      }
    }
    
    fetchExercises()
  }, [dispatchExercise])

  
  return (
    <div className="createSession">
      <h3>Lag en økt</h3>
      {exercises && <Dropdown 
        isMulti={true} 
        placeHolder="Velg øvelse..." 
        options={exercises
          .filter(e => e.user_id === user.uid)
          .map(e => ({value: e._id, label: e.title}))}
          //.filter(e =>(e.user_id === user.uid))}
        allExercises={exercises}
      />}
      
    

    </div>
    
    
  )
} 

export default CreateSession
