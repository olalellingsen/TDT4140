import { useState } from "react"
import { useExerciseCtx } from "../../hooks/useExerciseCtx"
import { useUaCtx } from "../../hooks/useUaCtx"

import './exerciseForm.css'

const ExerciseForm = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [error, setError] = useState(null)

 
    const {dispatchExercise} = useExerciseCtx()
    const { user } = useUaCtx()

    


    const handleSubmit = async (e) => {
        e.preventDefault()

        const user_id = user.uid;
        const exercise = {title, sets, reps, weight, user_id}
        const response = await fetch("/api/exercises/", {
            method: "POST",
            body: JSON.stringify(exercise),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        } 
        else {
            setTitle('')
            setSets('')
            setReps('')
            setWeight('')
            setError(null)
            console.log("Ny treningsøvelse lagt til", json)
            dispatchExercise({type: "CREATE_EXERCISE", payload: json})
        }
    }

    return (
        <form className="createExercise" onSubmit={handleSubmit}>
            <h3>Legg til øvelse</h3>

            <input
                placeholder="Navn"
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />

            <input 
                placeholder="Antall sett"
                type = "number"
                onChange = {(e) => setSets(e.target.value)}
                value = {sets}
            />

            <input 
                placeholder="Repetisjoner"
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />

            <input 
                placeholder="Vekt (kg)"
                type = "number"
                onChange = {(e) => setWeight(e.target.value)}
                value = {weight}
            />

            
            <button className="button">Legg til</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ExerciseForm