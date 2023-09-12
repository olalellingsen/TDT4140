import React, { useEffect, useState } from "react";
import { useSessionCtx } from "../../hooks/useSessionCtx"
import { useUaCtx } from "../../hooks/useUaCtx"

import './dropdown.css'

const Icon = ({rotate}) => {
    return (
      <svg
      style={rotate ? {} : {transform: 'rotate(270deg)'}}
      height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    )
  }
  
  
const Dropdown = ({ placeHolder, options, isMulti, allExercises }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null)
    const [title, setTitle] = useState("")
    const { session } = useSessionCtx()
    const [share,setIsShared] = useState(session?.share || false)
    const [comment, setComment] = useState("")
    const {dispatchSession} = useSessionCtx()
    const { user } = useUaCtx()
   

    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener("click", handler)
        return () => {
            window.removeEventListener("click", handler)
        }
    })

    const handleInputClick = (e) => {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }

    const CloseIcon = () => {
        return (
            <svg height="20" width="20" viewBox="0 0 20 20">
                <path d="M14.348 14.849c-0.469 0.469-1.229 
                0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 
                0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 
                0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 
                0-1.697s1.228-0.469 1.697 0l2.652 3.031 
                2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 
                1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
        )
    }

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder
        }
        if (isMulti) {
            return (
                <div className="dropdown-tags">
                    {selectedValue.map((option) => (
                        <div key={option.value} className="dropdown-tag-item">
                            {option.label}
                            <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close"><CloseIcon /></span>
                        </div>
                    ))}
                </div>
            )
        }
        return selectedValue.label
    }

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value)
    }

    const onTagRemove = (e, option) => {
        e.stopPropagation()
        setSelectedValue(removeOption(option))
    }

    const onItemClick = (option) => {
        let newValue;
        if (isMulti) {
            if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option)
            } else {
                newValue = [...selectedValue, option]
            }
        } else {
            newValue = option
        }
        setSelectedValue(newValue)
    }

    const isSelected = (option) => {
        if (isMulti) {
            return selectedValue.filter((o) => o.value === option.value).length > 0
        }

        if (!selectedValue) {
            return false
        }

        return selectedValue.value === option.value
    }

    const handleClick = async (e) => {
        e.preventDefault()

        // POST NEW SESSION
        if (selectedValue.length !== 0) {
            const exercises = selectedValue.map((selected) => {
                return allExercises.find((exercise) => selected.value === exercise._id)
            })
            const user_id = user.uid
            const session = {title, exercises, user_id, share,comment}
            const response = await fetch("/api/sessions/", {
                method: "POST",
                body: JSON.stringify(session),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const json = await response.json()

            if(response.ok) {
                setIsShared(false)
                setTitle('')
                setComment('')
                setSelectedValue([])
                console.log("Ny treningsøkt lagt til", json)
                dispatchSession({type: "CREATE_SESSION", payload: json})
            }
        }
    }

    

    return (
      <div className="dropdown-container">
        <input
            className='sessionInput'
            placeholder="Navn på økt..."
            type = "text"
            onChange = {(e) => setTitle(e.target.value)}
            value = {title}
        />
        <label>
    </label>
        <input
            className="sessionCommentInput"
            placeholder="Kommentar..."
            type = "text"
            onChange={(e) => setComment(e.target.value)}
            value = {comment}
        />
        <div className="checkbox-container" >
            Del økt
            <input
            className="checkbox"
                type="checkbox"
                checked={share}
                onChange={(e) => setIsShared(e.target.checked)}
                value = {share}/>
        </div>
        <div onClick={handleInputClick} className="dropdown-input">
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon rotate={showMenu} />
            </div>
          </div>
        </div>
        {showMenu && (
            <div className="dropdown-menu">
                {options.map((option) => (
                    <div 
                    onClick={() => onItemClick(option)}
                    key={option.value}
                    className={`dropdown-item ${isSelected(option) && "selected"}`}
                    >
                        {option.label}
                    </div>
                    
                ))  
            }
            </div>
        )}
        <button className='button' onClick={handleClick}>Opprett ny økt</button>
      </div>
    )
  }
  
  export default Dropdown