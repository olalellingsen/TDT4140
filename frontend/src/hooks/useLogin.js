import { useState } from 'react'
import { useUaCtx } from './useUaCtx'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useUaCtx()

  const login = async (username, password) => {
    setIsLoading(true)
    setError(null) 

    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const user = await response.json()

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user))

      // ua context oppdatering
      dispatch({type: 'LOGIN', payload: user})
      window.location.reload()
      setIsLoading(false)
    }
    else {   
        setIsLoading(false)
        setError(user.error)     
    }
  }

  return { login, isLoading, error }
}