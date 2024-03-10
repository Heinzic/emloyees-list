import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeesList from './components/pages/EmployeesList';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<EmployeesList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
