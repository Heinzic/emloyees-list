import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeesList from './components/pages/EmployeesList';
import Profile from './components/pages/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<EmployeesList />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
