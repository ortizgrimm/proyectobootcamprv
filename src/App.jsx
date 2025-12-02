import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage/Loginpage'
import Registerpage from './pages/Registerpage/Registerpage'
import Forgotpage from './pages/Forgotpage/Forgotpage'
import Resetpage from './pages/Resetpage/Resetpage'
import DashboardPage from './pages/Dashboard/DashboardPage';
import HomeHooks from './playground/HomeHooks';
import HookUseState from './playground/HookUseState';
import HookUseNavigate from './playground/HookUseNavigate';
import UseEffect from "./playground/UseEffect";
import UseLayoutEffect from "./playground/UseLayoutEffect";
import UseTransition from "./playground/UseTransition.jsx";
import ListUsers from "./pages/ListUsers/ListUsers";
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas públicas */}
        <Route path='/' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/forgot' element={<Forgotpage />} />
        <Route path='/reset' element={<Resetpage />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="/users" element={ <ProtectedRoute><ListUsers /></ProtectedRoute>}/>

        {/* Playground */}
        <Route path="/hooks" element={<HomeHooks />}/>
        <Route path="/usestate" element={<HookUseState />}/>
        <Route path="/usenavigate" element={<HookUseNavigate />}/> 
        <Route path="/useeffect" element={<UseEffect />}/> 
        <Route path="/uselayouteffect" element={<UseLayoutEffect />}/> 
        <Route path="/usetransition" element={<UseTransition />}/> 

      </Routes>
    </BrowserRouter>
  )
}

export default App
