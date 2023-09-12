import { useState } from "react"
import { useUaCtx } from '../hooks/useUaCtx'


const WorkoutForm = () => {
    const { user } = useUaCtx()


    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, sets, reps}

        const response = await fetch()
    }

    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Legg til økt</h3>

            <label>Øvelse:</label>
            <input 
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />

            <label>Sets:</label>
            <input 
                type = "number"
                onChange = {(e) => setSets(e.target.value)}
                value = {sets}
            />

            <label>Reps:</label>
            <input 
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />

            <button>Legg til</button>
        </form>
    )
}

export default WorkoutForm