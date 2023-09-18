import './App.css'
import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom" // เพิ่ม Navigate จาก react-router-dom
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
import ShowContact from './components/Pages/Contact/ShowContact'
import Confirmtutor from './components/Pages/admin/confirmtutor'
import Showtutor from './components/Pages/admin/Showtutor'

function App() {
  const isAdminPage = window.location.pathname.includes('/admin'); // ตรวจสอบว่าเป็นหน้า Admin หรือไม่
  const isContactPage = window.location.pathname.includes('/ShowContact');// ตรวจสอบว่าเป็นหน้า Contact หรือไม่
  const isConfirmtutorPage = window.location.pathname.includes('/Confirmtutor');
  const isShowtutorPage = window.location.pathname.includes('/Showtutor');

  const shouldShowNavbar = !isAdminPage && !isContactPage && !isConfirmtutorPage && !isShowtutorPage; // ตรวจสอบว่าควรแสดง Navbar หรือไม่

  // เพิ่มการตรวจสอบคุกกี้ token และการนำทาง
  const token = getCookie('token');

  return (
    <>
      {shouldShowNavbar && <Navbar />} {/* แสดง Navbar เฉพาะเมื่อไม่ได้อยู่ในหน้า Admin หรือ Contact */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Registutor" element={<Registutor />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={token ? <Navigate to="/" /> : <Login />} /> {/* ถ้ามี token ให้นำไป dashboard */}
          <Route path="/Searchtutor" element={<Searchtutor />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/ShowContact" element={<ShowContact />} />
          <Route path="/Confirmtutor" element={<Confirmtutor />} />
          <Route path="/Showtutor" element={<Showtutor />} />
        </Routes>
      </div>
    </>
  )
}

export default App

// ฟังก์ชันสำหรับอ่านคุกกี้
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
