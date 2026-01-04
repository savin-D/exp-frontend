import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import View from './pages/view'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import New from './components/New'
import Newcard from './components/card'
// import Form from './components/Form'
import { Add } from '@mui/icons-material'
import Form from './pages/add'
import Edit from './pages/Edit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ToastContainer />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/insert' element={<Form/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        {/* <Route path='/new' element={<New/>}/>
        <Route path='/newcard' element={<Newcard/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
