import { useEffect} from "react"
import { useUaCtx } from "../../hooks/useUaCtx"
import'./MyExercises.css'


// components
import ExerciseDetails from "../../components/ExerciseDetails/ExerciseDetails"
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm"
import { useExerciseCtx } from "../../hooks/useExerciseCtx"



const MyExercises = () => {
  const {exercises, dispatchExercise} = useExerciseCtx()
  const { user } = useUaCtx()

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch('api/exercises/');
      if (response.ok) {
        const json = await response.json();
        const filteredExercises = json.filter((exercise) => exercise.user_id === user.uid);
        dispatchExercise({ type: 'SET_EXERCISES', payload: filteredExercises });
      }
    };
  
    fetchExercises();
  }, [dispatchExercise, user.uid]);

  return (
    <div className="myExercises">
        <h2>Mine Øvelser</h2>
      <div className="exercisesAndForm">
        <div className="exercises">
          {exercises && exercises.map(exercise => (
            <ExerciseDetails exercise={exercise} key={exercise._id} />
          ))}
        </div>
        <ExerciseForm />
      </div>
    </div>  
  )
}

export default MyExercises