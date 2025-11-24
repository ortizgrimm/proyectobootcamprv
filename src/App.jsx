
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage/Loginpage'
import Registerpage from './pages/Registerpage/Registerpage'
import Forgotpage from './pages/Forgotpage/Forgotpage'
import Resetpage from './pages/Resetpage/Resetpage'
import DashboardPage from './pages/Dashboard/DashboardPage';
import HomeHooks from './playground/HomeHooks';
import HookUseState from './playground/HookUseState';
// import HookUseNavigate from './playground/HookUseNavigate';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/forgot' element={<Forgotpage />} />
      <Route path='/reset' element={<Resetpage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      
      
      {/* Rutas de playground para hooks */}
      <Route path="/hooks" element={<HomeHooks />}/>
      <Route path="/usestate" element={<HookUseState />}/>
      {/* <Route path="/usenavigate" element={<HookUseNavigate />}/> */}
    </Routes>
    </BrowserRouter>
  )
    
}

export default App
