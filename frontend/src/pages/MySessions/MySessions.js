import { useEffect} from "react"
import { useUaCtx } from "../../hooks/useUaCtx"

// components
import CreateSession from "../../components/createSession/CreateSession"
import SessionDetails from "../../components/SessionDetails/SessionDetails"
import { useSessionCtx } from "../../hooks/useSessionCtx"
import'./MySessions.css'

const MySessions = () => {

    const {sessions, dispatchSession} = useSessionCtx()
    const { user } = useUaCtx()

    useEffect(() => {
    const fetchSessions = async () => {
        const response = await fetch("api/sessions/")
        const json = await response.json()
  
        if (response.ok) {
          dispatchSession({type: "SET_SESSIONS", payload: json})
        }
      }
      
      fetchSessions()
    }, [dispatchSession])
    
    return (
        <div className="mySessions">
            <h2>Mine Treningsøkter</h2>
            <div className="createAndSessions">
                <div className="sessions">
                {sessions && sessions
                .filter(session => session.user_id === user.uid)
                .map(session => (<SessionDetails session={session} key={session._id} editable = {true} />))
                }
                </div>
                <CreateSession/>
            </div>
        </div>
    )
}

export default MySessions