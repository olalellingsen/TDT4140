import { useUaCtx } from './useUaCtx'

export const useLogout = () => {
  const { dispatch } = useUaCtx()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}