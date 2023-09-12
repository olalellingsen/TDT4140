import { useState } from 'react'
import { useUaCtx } from './useUaCtx'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useUaCtx()

  const signup = async (username, password) => {
    setIsLoading(true)
    setError(null) 

    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const user = await response.json()

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user))

      // ua context oppdatering
      dispatch({type: 'INNLOGGING', payload: user})
      setIsLoading(false)
    }
    else {   
        setIsLoading(false)
        setError(user.error)     
    }
  }

  return { signup, isLoading, error }
}