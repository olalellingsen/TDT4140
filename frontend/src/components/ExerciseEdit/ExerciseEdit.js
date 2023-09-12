import { useState } from "react"
import { useExerciseCtx } from "../../hooks/useExerciseCtx"

import './exerciseEdit.css'

const ExerciseEdit = ({exercise}) => {
    const [title, setTitle] = useState(exercise.title)
    const [sets, setSets] = useState(exercise.sets)
    const [reps, setReps] = useState(exercise.reps)
    const [weight, setWeight] = useState(exercise.weight)
    const [error, setError] = useState(null)

    const {dispatchExercise} = useExerciseCtx()

    const handleEdit = async (e) => {
        e.preventDefault()

        const exerciseEdit = {title, sets, reps, weight}
        const response = await fetch("/api/exercises/" + exercise._id, {
            method: "PATCH",
            body: JSON.stringify(exerciseEdit),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }

        const responseEdit = await fetch("/api/exercises/" + exercise._id)

        const jsonEdit = await responseEdit.json()
        if(!responseEdit.ok) {
            setError(jsonEdit.error)
        }
        else {
            setError(null)
            console.log("Treningsøvelse ", json, "ble endret til", jsonEdit)
            dispatchExercise({type: "EDIT_EXERCISE", payload: jsonEdit})
        }
    }

    return (
        <form className="edit">
            <input 
                className="edit-input"
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />

            <input 
                className="edit-input"
                type = "number"
                onChange = {(e) => setSets(e.target.value)}
                value = {sets}
            />

            <input 
                className="edit-input"
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />

            <input 
                className="edit-input"
                type = "number"
                onChange = {(e) => setWeight(e.target.value)}
                value = {weight}
            />

            <button className="button" onClick={handleEdit}>Lagre</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ExerciseEdit