import React from 'react'

import './createGroups.css'

import { useState } from "react"
import { useUaCtx } from "../../hooks/useUaCtx"
import { useGroupCtx } from '../../hooks/useGroupCtx'

import FileBase64 from 'react-file-base64'


const CreateGroups = () => {

  const [groupName, setGroupName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)
  const {dispatchGroup} = useGroupCtx()


  const { user } = useUaCtx()
  

  const handleSubmit = async (e) => {

    // skal opprette en ny gruppe i backend

    e.preventDefault()


    //     "groupName": "Streve gruppen",
    //     "description": "Vi gir oss aldri dersom vi setter et milepele! Alle som vil kan delta i denne gruppen.",
    //     "administrator": "63ecbaa2efd240931c78c49d",
    //     "members": [
    //         "6406657134a64d6672e7cc5a",
    //         "64083e9e0d932884a574fb08"
    //     ],
    //     "image": "https://assets.newatlas.com/dims4/default/59b2f26/2147483647/strip/true/crop/2000x1335+0+0/resize/2880x1922!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fde%2Fd2%2F0133f194417d8762b5211d9af176%2Fsex-diff-exercise.jpg",
    //     "__v": 0

    //const user_id = user.uid;
    const administrator = user.uid
    const members = []
    const group = {groupName, description, administrator, members, image}
    
    const response = await fetch("/api/groups/", {
        method: "POST",
        body: JSON.stringify(group),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
    } 

    else {
    dispatchGroup({type: "CREATE_GROUP", payload: json}) 
    }
    
}


  return (
    <form className="createGroups" onSubmit={handleSubmit} >
      <h3>Opprett gruppe</h3>
      
      <input
        placeholder="Gruppenavn"
        type = "text"
        onChange = {(e) => setGroupName(e.target.value)}
        value = {groupName}
      />

      <textarea
        className='textarea'
        placeholder="Beskrivelse"
        type = "textarea"
        onChange = {(e) => setDescription(e.target.value)}
        value = {description}
      />

      <div className='uploadImg'>
        <p>Last opp et gruppebilde:</p>
        <FileBase64
          multiple={false} 
          onDone={ ({base64}) => setImage({image , image: base64}) } />
      </div>
    
    
      <button className="button">Opprett gruppe</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CreateGroups