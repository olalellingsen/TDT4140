import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'
import { useUaCtx } from "../hooks/useUaCtx"


const Navbar = () => {

  const { logout } = useLogout()

  const { user } = useUaCtx()

  const handleLogout = () => {
    logout()
  }

    return (
        <header>
            <div className="nav">
                <Link to='/'>
                    <h1>Strevar</h1>
                </Link>
                    {!user && 
                      <nav>
                          <Link to="/">Login</Link>
                          <Link to="/signup">Signup</Link>
                      </nav>
                    }
                    {user && 
                    <ul>
                     <CustomLink to="/">Hjem</CustomLink>
                     <CustomLink to="/friends">Venner</CustomLink>
                     <CustomLink to="/">Grupper</CustomLink>
                     <CustomLink to="/my-programs">Treningsprogram</CustomLink>
                     <CustomLink to="/my-sessions">Treningsøkter</CustomLink>
                     <CustomLink to="/my-exercises">Øvelser</CustomLink>
                      <button onClick={handleLogout}>Logg ut</button>
                    </ul>
                    }
                
            </div>
        </header>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Navbar