import FindFriends from "../../components/FindFriends/FindFriends"
import MyFriends from "../../components/MyFriends/MyFriends"
import './friends.css'
import { useEffect, useState } from 'react'
import {useUserCtx} from "../../hooks/useUserCtx"
import { useUaCtx } from "../../hooks/useUaCtx"
//components

const Friends = () => {

    const { user, dispatch } = useUaCtx()
    const [search, setSearch] = useState("")
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




const handleClick = async (followingUserID) => {
    // Send a request to add the user's id to the current user's following array

    const selfUserID = user.uid;
    const followDetails = {selfUserID, followingUserID}
    const response = await fetch(`/api/users/newfollow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(followDetails),
    });
    const json = await response.json()
    
    if (!response.ok) {
      throw new Error('Unable to follow user');
    }
    else {
      dispatch({type: "FOLLOW_USER", payload: json.message._id})
    }
  }
  
  if (user && users) {
    return (
        <div className="friends">
            <div className="findFriendsContainer">
              <h2>Finn venner</h2>
              <input className="friendSearch" name="q" type="text" placeholder="Søk etter venner" onChange={(e) => setSearch(e.target.value)} value={search}></input>
              <FindFriends user={user} 
              users ={users.filter(u => !user.following.includes(u._id) && u._id !== user.uid && u.username.toLowerCase().includes(search.toLowerCase()))}
              handleClick={handleClick}/> 
            </div>
            <div className="myFriendsContainer">
              <h2>Mine venner</h2>
              <MyFriends 
              following={users.filter(u => user.following.includes(u._id))}/>
            </div>
        </div>
    )
  }
}

export default Friends
