import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Front from './components/Front'
import Students from './components/Students'
import Contact from './components/Contact'



function App() {



  return (
    <BrowserRouter>

      <div className='Container'>
        <Navbar />
        <Front />
        <Students />
        <Contact />

      </div>
    </BrowserRouter>
  )


}

export default App
