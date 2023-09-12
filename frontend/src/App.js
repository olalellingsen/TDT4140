import  {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar';
import MyExercises from './pages/MyExercises/MyExercises';  
import MySessions from './pages/MySessions/MySessions';
import MyPrograms from './pages/MyPrograms/MyPrograms';
import Profile from './pages/Profile/Profile';
import Friends from './pages/Friends/Friends';
import Groups from './pages/Groups/Groups';


import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import {useUaCtx} from './hooks/useUaCtx'


function App() {

  const {user} = useUaCtx()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
  
        <div className='pages'>
            {user && (
              <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/friends' element={<Friends />} />
                <Route path='/groups' element={<Groups />} />
                <Route path="/my-programs" element={<MyPrograms />} />
                <Route path="/my-exercises" element={<MyExercises />} />
                <Route path="/my-sessions" element={<MySessions />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            )
            }
            {!user && (
              <Routes>
                <Route path='/' element={<Login />} /> 
                <Route path="/signup" element={<Signup />} />
              </Routes>
            ) 
            }
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
