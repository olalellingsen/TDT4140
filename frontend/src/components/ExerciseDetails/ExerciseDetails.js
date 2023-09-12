import { useExerciseCtx } from "../../hooks/useExerciseCtx"
import ExerciseEdit from "../ExerciseEdit/ExerciseEdit"
import { useState } from "react"

import './exerciseDetails.css'

//date handling
import formatDistanceToNow from "date-fns/formatDistanceToNow"


const ExerciseDetails = ({ exercise }) => {
  const {dispatchExercise} = useExerciseCtx()
  const [editForm, setEditForm] = useState(false);
  const [editInfo, setEditInfo] = useState("Endre");


  const handleDelete = async() => {
    const response = await fetch("/api/exercises/" + exercise._id, {
      method: "DELETE"
    })
    const json = await response.json()

    if (response.ok) {
      dispatchExercise({type: "DELETE_EXERCISE", payload: json})
      console.log()
    }
  }

  const handleEdit = () => {
    setEditForm((prev) => !prev)
    if(editInfo === "Endre") {
      setEditInfo("Lukk")
    }
    else {
      setEditInfo("Endre")
    }
  }
  

  return (
    <div className="exercise-details" style={ editForm ? {height: '32rem'} : {height: '20rem'}} >
      <div className="details">
        <h4>{exercise.title}</h4>
        <p><strong>Antall sett: </strong>{exercise.sets}</p>
        <p><strong>Antall repetisjoner: </strong>{exercise.reps}</p>
        <p><strong>Vekt (kg): </strong>{exercise.weight}</p>
        <p>{formatDistanceToNow(new Date(exercise.createdAt), {addSuffix: true})}</p>
      </div>
      <div className="editExercise">
        {editForm && <ExerciseEdit  exercise={exercise} key={exercise._id} />}
        <button className="button" onClick={handleEdit}>{editInfo}</button>
        <button className="button" onClick={handleDelete}>Fjern øvelse</button>
      </div>
    </div>
  ) 
}
  
export default ExerciseDetails