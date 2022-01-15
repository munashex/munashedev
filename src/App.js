import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './navbar';
import About from './About'
import Contact from './Contact';


 function App() {
  return (
<BrowserRouter>
<Navbars/>
<Routes>
  <Route path="/" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App;


