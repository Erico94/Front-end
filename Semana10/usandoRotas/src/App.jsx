import {Routes,Route,BrowserRouter as Router, Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Empresa from './pages/Empresa/Empresa'
import Empresas from './pages/Empresas/Empresas'
import Login from './pages/Login/Login'
import Noticias from './pages/Noticias/Noticias'
import Tarefas from './pages/Tarefas/Tarefas'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { AuthContext } from './context/AuthContext'

function App() {
  // const [count, setCount] = useState(0)

  const {theme} = useContext(ThemeContext);
  const {isLoggedIn} = useContext (AuthContext);


  return (
    <div className={theme === 'light' ? 'App' : 'App dark-theme'}>
      <Router>
        {isLoggedIn && <Header/>}
        <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isLoggedIn ? <Login />: <Navigate to="/home" />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/noticias" element={isLoggedIn ? <Noticias /> : <Navigate to="/login" />} />
          <Route path="/empresas" element={isLoggedIn ? <Empresas /> : <Navigate to="/login" />} />
          <Route path="/empresa/:empresa" element={isLoggedIn ? <Empresa /> : <Navigate to="/login" />} />
          <Route path="/tarefas" element={isLoggedIn ? <Tarefas /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
