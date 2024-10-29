import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AddKaryawan from './pages/AddKaryawan';
import EditKaryawan from './pages/EditKaryawan';

function App() {
  return (
    <div className='w-screen h-screen font-poppins'>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/add-karyawan' element={<AddKaryawan />}/>
        <Route path='/edit-karyawan/:nik' element={<EditKaryawan />}/>
      </Routes>
    </div>
  )
}

export default App
