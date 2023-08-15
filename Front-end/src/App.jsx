import './App.css'
import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import About from './components/Pages/About/About'
import Registutor from './components/Pages/Registutor/Registutor'
import Contact from './components/Pages/Contact/Contact'
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Searchtutor from './components/Pages/SearchTutor/Searchtutor'
import Register from './components/Pages/Login/Register'
import Profile from './components/Pages/Profile-details/Profile'
import Security from './components/Pages/Profile-details/Security'
import Admin from './components/Pages/admin/admin'
import Policy from './components/Policy/Policy'

function App() {
  const isAdminPage = window.location.pathname.includes('/admin'); // ตรวจสอบว่าเป็นหน้า Admin หรือไม่

  return (
    <>
      {!isAdminPage && <Navbar />} {/* แสดง Navbar เฉพาะเมื่อไม่ได้อยู่ในหน้า Admin */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Registutor" element={<Registutor />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Searchtutor" element={<Searchtutor />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Policy" element={<Policy />} />
        </Routes>
      </div>
    </>
  )
}

export default App
