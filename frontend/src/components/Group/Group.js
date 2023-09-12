import React, { useState, useEffect } from 'react'
import './Group.css'
import {useUserCtx} from '../../hooks/useUserCtx'

const Group = ({ group, key }) => {
  const [showMembers, setShowMembers] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);
  const image = group.image

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
  }, [dispatchUser])

  //eksempel:
  //const image = "https://media.npr.org/assets/img/2010/08/22/strength_wide-f82ab7c6cf40ee7df563c3a7a05f2709a38aac88-s1600-c85.webp"

  const handleMembersClick = () => {
    setShowMembers(!showMembers);
    setArrowRotation(arrowRotation + 180);
  }


  return (
    <div className='group'>
        <h3>{group.groupName}</h3>
        <div className='groupFlex'>
            <div className='groupInfo'>
                <p>{group.description}</p>

                <img src={image} alt="image" />
            </div>
            <div className='groupMembers'>
                <p className='memberBtn' onClick={handleMembersClick}>
                  Se medlemmer 
                  {showMembers && (
                    <svg width="15px" height="15px" viewBox="100 100 800 400"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"></path></g></svg>
                  )}
                  {!showMembers && (
                    <svg width="15px" height="15px" viewBox="280 300 800 500" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"></path></g></svg>
                  )}
                </p>
                {showMembers && (
                <div className="memberList">
                    {/* List of group members */}
                    <ul>
                      {group.members && users && users
                      .filter(u => group.members.includes(u._id))
                      .map(u => (
                        <li>{u.username}</li>
                      ))
                      }
                    </ul>
                </div>
                )}
                <button className='button'>Bli med i gruppe!</button>
            </div>
        </div>

    </div>
  )
}

export default Group
