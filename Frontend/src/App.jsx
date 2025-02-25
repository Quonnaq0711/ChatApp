import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/SettingsPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';

import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={<ProfilePage />} />


      </Routes>

    </div>
  )
}

export default App