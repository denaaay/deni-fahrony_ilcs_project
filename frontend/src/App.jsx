import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AddKaryawan from './pages/AddKaryawan';

function App() {
  return (
    <div className='w-screen h-screen font-poppins'>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/add-karyawan' element={<AddKaryawan />}/>
      </Routes>
    </div>
  )
}

export default App
