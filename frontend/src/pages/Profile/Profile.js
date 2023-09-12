import Stats from "../../components/stats/Stats"
import'./Profile.css'


const Profile = () => {





    return (
        <div className="profile">
            <h2>Min Profil</h2>
            <div className="profile-stats">
                <Stats description={"Antall treningsdager denne uka"} status={6} goal={7} />
                <h3>Mål</h3>
                <Stats description={"Ta 20 pushups 10 dager på rad"} status={9} goal={10} />
                <Stats description={"Ta 10 pull-ups hver dag"} status={5} goal={10} />
                
            </div>
        </div>
    )
}

export default Profile