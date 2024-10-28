import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="w-full bg-cover h-screen bg-right" style={{ backgroundImage: `url('/images/col.jpg')` }}>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
    </div>
  
  )
}

export default App
