import { useState } from "react"
import {useLogin} from "../../hooks/useLogin"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import'./Login.css'

const Login = () => {
  const {login, error, isLoading} = useLogin("")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (a) => {
    a.preventDefault()

    await login(username, password)
    
   // console.log("Brukernavn: ", username, "Passord: ", password)
}

  return (
    <form className="login" onSubmit={submitHandler}>
      <h3>Logg inn</h3>
      
      <label>Brukernavn (epost):</label>
      <input 
        type = "username" 
        onChange = {(c) => setUsername(c.target.value)} 
        value = {username} 
      />
      <label>Passord:</label>
      <input 
        type = "password" 
        onChange = {(c) => setPassword(c.target.value)} 
        value = {password} 
      />
      <button className="button">Logg inn</button>
      {error && <div className="error">{error}</div>}
      <CustomLink to="/signup">Ikke bruker? Registrer deg her!</CustomLink>
    </form>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link className={`login-link ${isActive ? 'active' : ''}`} to={to} {...props}>
      {children}
    </Link>
  )
}


export default Login

