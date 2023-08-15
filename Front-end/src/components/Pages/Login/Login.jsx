import React from 'react'
import './Login.css'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'

function Login() {


  return (
    <>
      <div className="login-container">
        <form action="" className='login-form'>

          <div className="img-login">
            <img src='/src/components/img/login-page/login-user.png' alt="" />
            <h1>เข้าสู่ระบบ</h1>
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label><br />
            <input type="text" name="" id="" placeholder='Email' />
          </div>
          <div className="input-box">
            <label htmlFor="">Password</label><br />
            <input type="password" placeholder='Password' />
          </div>
          <p>ยังไม่ได้ลงทะเบียนใช่ไหม? <a href='/Register'>ลงทะเบียน</a></p>
          <p><Link>ลืมรหัสผ่าน?</Link></p>
          <div className="btn-login">
            <button >เข้าสู่ระบบ</button>
          </div>


        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login