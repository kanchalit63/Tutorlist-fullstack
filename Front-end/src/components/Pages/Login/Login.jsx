import React, { useState } from 'react'
import './Login.css'
import Footer from '../../Footer/Footer'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {

  const [values , setValues] = useState ({
    User_email : '',
    User_password : '',
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5050/login', {
      User_email: values.User_email,
      User_password: values.User_password,
    })
      .then(res => {
        if (res.data.status === "ok") {
          // บันทึก token ในคุกกี้และตั้งเวลาหมดอายุเป็น 1 นาที
          const now = new Date();
          now.setTime(now.getTime() + 60 * 60 * 1000); // 1 ชั่วโมง
          document.cookie = `token=${res.data.token}; expires=${now.toUTCString()}; path=/`;
          alert('เข้าสู่ระบบสำเร็จ');
          // รีเฟรชหน้า
          window.location.reload();
  
          // ทำการเรียกฟังก์ชันใดก็ตามที่คุณต้องการหลังจากรีเฟรช
          // ตัวอย่าง: นำผู้ใช้ไปยังหน้าอื่นๆ
          navigate('/');
        } else {
          alert("ไม่พบผู้ใช้นี้กรุณาลองใหม่");
        }
      })
      .catch(err => console.log(err))
  }
  
  

  return (
    <>
      <div className="login-container">
        <form action="" className='login-form' onSubmit={handleSubmit}>

          <div className="img-login">
            <img src='/src/components/img/login-page/login-user.png' alt="" />
            <h1>เข้าสู่ระบบ</h1>
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label><br />
            <input type="text" name="" id="" placeholder='Email' onChange={ e => setValues ({...values,User_email : e.target.value})}/>
          </div>
          <div className="input-box">
            <label htmlFor="">Password</label><br />
            <input type="password" placeholder='Password' onChange={ e => setValues ({...values,User_password : e.target.value})}/>
          </div>
          <p>ยังไม่ได้ลงทะเบียนใช่ไหม? <a href='/Register' >ลงทะเบียน</a></p>
          <p><Link>ลืมรหัสผ่าน?</Link></p>
          <div className="btn-login">
            <button type='submit'>เข้าสู่ระบบ</button>
          </div>


        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login