import {React, useEffect } from 'react'
import { useGroupCtx } from '../../hooks/useGroupCtx'
import Group from '../Group/Group'
import './ExistingGroups.css'


const ExistingGroups = () => {

    const {groups, dispatchGroup} = useGroupCtx()
  
    useEffect(() => {
      const fetchGroups= async () => {
        const response = await fetch('api/groups/');
        if (response.ok) {
          const json = await response.json();
          dispatchGroup({type: "SET_GROUPS", payload: json})
        }
      };
    
      fetchGroups();
    }, [dispatchGroup]);


  return (
    <div className='existingGroups'>
        <h3>Finn nye grupper</h3>
        <div className='groupContainer'>
        {groups && groups.map(group => (
            <Group group={group} key={group._id} />
          ))}
        </div>
    </div>
  )
}

export default ExistingGroups