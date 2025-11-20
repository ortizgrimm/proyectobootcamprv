
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage/Loginpage'
import Registerpage from './pages/Registerpage/Registerpage'
import Forgotpage from './pages/Forgotpage/Forgotpage'
import Resetpage from './pages/Resetpage/Resetpage'
import DashboardPage from './pages/Dashboard/DashboardPage';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/forgot' element={<Forgotpage />} />
      <Route path='/reset' element={<Resetpage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
    </BrowserRouter>
  )
    
}

export default App
