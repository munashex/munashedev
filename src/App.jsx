import React from 'react'
import NavBar from './components/Navbar' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About' 
import Home from './pages/Home' 
import Portifolio from './pages/Portifolio' 
import Contact from './pages/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound'

function App() {
  return (
    <> 
      <BrowserRouter> 
    <NavBar/>
    <Routes>
     <Route path="/" element={<Home/>}/> 
     <Route path="/about" element={<About/>}/>  
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/work" element={<Portifolio/>}/> 
     <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter> 
    <ToastContainer/>
    </>
  )
}

export default App