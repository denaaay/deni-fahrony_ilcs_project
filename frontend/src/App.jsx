import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className='w-screen h-screen font-poppins'>
      <Routes>
        <Route path='/' element={<Landing />}/>
      </Routes>
    </div>
  )
}

export default App
