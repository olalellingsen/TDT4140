import {useState} from 'react'
import {useSignup} from "../../hooks/useSignup"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import'./Signup.css'


const Signup = () => {
    const {signup, error, isLoading} = useSignup("")
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (a) => {
        a.preventDefault()

        console.log("Brukernavn: ", username, "Passord: ", password)
        await signup(username, password)
    }

    return (
        <form className="signup" onSubmit={submitHandler}>
            <h3>Registrer ny bruker: </h3>

            <label>Brukernavn (epost): </label>
            <input
                type = "username"
                onChange = {(c) => setUsername(c.target.value)}
                value = {username}
            />

            <label>Passord: </label>
            <input
                type = "password"
                onChange = {(p) => setPassword(p.target.value)}
                value = {password}
            />

            <button className='button' disabled={isLoading}>Registrer deg</button>
            <CustomLink to="/">Allerede bruker? Logg inn her!</CustomLink>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
      <Link className={`signup-link ${isActive ? 'active' : ''}`} to={to} {...props}>
        {children}
      </Link>
    )
  }

export default Signup