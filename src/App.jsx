import React from 'react'
import Navbar from './componentes/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import user from './pages/User'
import {BrowserRouter, Routes, Route,  } from "react-router-dom";
import UserDetail from './pages/UserDetails'

import User from './pages/User'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/users' element={<User/> }/>
      <Route path='/users/:id' element={<UserDetail/>}/>
    
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

