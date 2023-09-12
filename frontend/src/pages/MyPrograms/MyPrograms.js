import ExerciseDetails from "../../components/ExerciseDetails/ExerciseDetails"
import Program from "../../components/program/Program"
import'./MyPrograms.css'

const MyPrograms = () => {
    
    return (
      <div className="MyPrograms">
        <h2>Treningsprogram</h2>
        <div className="programs">
          <Program programTitle={'Mitt treningsprogram'}/>
          <Program programTitle={'Jonas sitt treningsprogram'}/>
        </div>
      </div> 
    )
  }
  
  export default MyPrograms