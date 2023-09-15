import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';


function Navbar() {

  const [auth, setAuth] = useState(false)


  axios.defaults.withCredentials = true //เก็บข้อมูลไม่ให้ออก จนกว่าจะLogout
  useEffect(() => {
    // ตรวจสอบว่ามี Token ในคุกกี้หรือไม่
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));

    if (tokenCookie) {
      setAuth(true); // ตั้งค่า auth เป็น true เมื่อมี Token ในคุกกี้
    }
  }, []);



  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleLogout = () => {
    // เคลียร์คุกกี้ 'token'
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    alert('ออกจากระบบสำเร็จ');
    // รีโหลดหน้าเว็บหรือดำเนินการตามต้องการหลังจาก Logout
    window.location.reload(true);
  }

  return (
    <nav className='Navbar-container'>
      <div className='navbar-logo'>
        <Link to={'/'}>
          <img src='/src/components/img/Logo.png' alt='Logo'></img>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link onClick={() => openInNewTab('/Registutor')}>สมัครติวเตอร์</Link></li>
        <li><Link to={'/About'}>เกี่ยวกับเรา</Link></li>
        <li><Link to={'/Contact'}>ติดต่อเรา</Link></li>
        <li>{
          auth ?
            <div>
              <div className="dropdown">
                <div className="dropdown-content-left">
                  <a href="/Profile">ประวัติส่วนตัว</a>
                  <a href="#">ตรวจสอบการจอง</a>
                  <a href="#">ตรวจสอบการชำระเงิน</a>
                  <a className='danger' onClick={handleLogout}>Logout</a>
                </div>
                <img src="/src/components/img/Profile.png"/>
                
              </div>
              
            </div>
            :
            <div>
              <Link to="/Login" className='nav-links' ><button>เข้าสู่ระบบ</button></Link>
            </div>
        }</li>
      </ul>
    </nav>
  )
}

export default Navbar;