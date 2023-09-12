import { useEffect, useState } from "react";
import SessionDetails from "../SessionDetails/SessionDetails";
import { useUaCtx } from "../../hooks/useUaCtx";
import { useUserCtx } from "../../hooks/useUserCtx";
import { format, parseISO } from 'date-fns';

//import axios from "axios";



// const SessionFeed = () => {
//   const { authState } = useUaCtx();
//   const [sessionPosts, setSessionPosts] = useState([]);

//   // useEffect(() => {
//   //   const fetchSharedSessions = async () => {
//   //     const response = await fetch("api/sessions");
//   //     const json = await response.json();
//   //     if (response.ok) {
//   //       setSharedSessions(json);
//   //     }
//   //   };

//   //   fetchSharedSessions();
//   // }, [authState]);
 

//   useEffect(()=>{
//     const fetchSessionPosts = async () => {
//     const res = await axios.get("sessionPosts/feed/:userId");
//     setSessionPosts(res.data)
//     };
//     fetchSessionPosts();
//   },[]);

//   return (

//     <div className="feed-container">
//       <h2 className="feed-header">Feed med venner</h2>
//       <div className="feed-box">
//         {sessionPosts.map((session) => (
//           <div key={session._id} className="session-card">
//             <p>Økt delt av {session.user_id}</p>
//             <p>Dato: {new Date(session.createdAt).toLocaleString()}</p>
//             <SessionDetails session={session} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )}

// export default SessionFeed;

const Feed = () => {
  const { authState, user } = useUaCtx();
  const [sharedSessions, setSharedSessions] = useState([]);
  const {users, dispatchUser} = useUserCtx()


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("api/users/")
      const json = await response.json()

      if (response.ok) {
        dispatchUser({type: "SET_USERS", payload: json})
      }
    }
    
    fetchUsers()
  }, [dispatchUser, user])

  useEffect(() => {
    const fetchSharedSessions = async () => {
      const response = await fetch("api/sessions");
      const json = await response.json();

      if (response.ok) {
        setSharedSessions(json);
      }
    };

    fetchSharedSessions();
  }, [authState]);

  useEffect(() => {
    const fetchUsername = async () => {
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${authState.token}`,
      //   },
      // };
      try {
        const response = await fetch("api/users/")
        const json = await response.json()
        console.log(json)
        // const { data } = await axios.get("/api/user", config);
        // console.log(data.username); // Replace this with the code to set the username state
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsername();
  }, [authState]);

  return (
    <div className="feed-container">
      <h2 className="feed-header">Feed</h2>
      <div className="feed-box">
        {sharedSessions && users && sharedSessions
        .filter((session) => user.following.includes(session.user_id) && session.share)
        .map((session) => (
          <div key={session._id} className="session-card">
            <p>Økt delt av {users.find((us) => us._id === session.user_id).username}</p>
            {/* <p>Økt delt av session._id</p> */}
            <p>Opprettet: {format(parseISO(session.createdAt), 'yyyy-MM-dd HH:mm')
}</p>
            <SessionDetails session={session} editable = {false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;

