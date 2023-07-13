import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Username from './forms/Username'
import Password from './forms/Password'

import Osm from './pages/osm/Osm'
import Cform from './pages/cform/Cform'
import Home from './pages/home/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home />} />
        <Route path="/changeusername" element={<Username />} />
        <Route path="/changepassword" element={<Password />} />

        <Route path="/home" element={<Home />} />
        <Route path="/cform" element={<Cform />} />
        <Route path="/osm" element={<Osm/>} />
      </Routes>
      
    <Footer/>
    </BrowserRouter>
    
  )
    
}

export default App
