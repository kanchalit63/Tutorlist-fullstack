import React, { useState } from 'react'
import Footer from '../../Footer/Footer'
import './Register.css'
import Axios from 'axios'

function Register() {

  const [userlist, setUserlist] = useState("")

  const [email, setEmail] = useState("") //สร้างตัวแปรสำหรับ Insert ข้อมูล Email
  const [name, setName] = useState("") //สร้างตัวแปรสำหรับ Insert ข้อมูล Name
  const [surename, setSurename] = useState("")  //สร้างตัวแปรสำหรับ Insert ข้อมูล Surename
  const [phone, setPhone] = useState("") //สร้างตัวแปรสำหรับ Insert ข้อมูล Phone
  const [password, setPassword] = useState("") //สร้างตัวแปรสำหรับ Insert ข้อมูล Password
  const [type, setType] = useState("") //สร้างตัวแปรสำหรับ Insert ข้อมูล type

  


  const addUsers = () => {
    Axios.post('http://localhost:5050/createuser', {
      User_email: email,
      User_name: name,
      User_surename: surename,
      User_phone: phone,
      User_password: password,
      User_type: "user"
    })
    .then((response) => {
      if (response.status === 200) {
        // แสดงข้อความแจ้งเตือนเมื่อสำเร็จ
        alert("ลงทะเบียนสำเร็จ");
        setUserlist([
          ...userlist,
          {
            User_email: email,
            User_name: name,
            User_surename: surename,
            User_phone: phone,
            User_password: password,
            User_type: "user"
          }
        ]);
      } else {
        console.log("Error registering user");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  };
  



  return (
    <>
      <div className="register-container">
        <form action="" className='register-form'>
          <div className="img-register">
            <img src="/src/components/img/login-page/login-user.png" alt="" />
            <h1>สมัครสมาชิก</h1>
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label><br />
            <input type="email" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
          </div>
          <div className="input-box">
            <label htmlFor="name">ชื่อ</label><br />
            <input type="name"  placeholder='ชื่อ' onChange={(event) => { setName(event.target.value) }} />
          </div>
          <div className="input-box">
            <label htmlFor="surename">นาสกุล</label><br />
            <input type="surename" placeholder='นาสกุล' onChange={(event) => { setSurename(event.target.value) }} />
          </div>
          <div className="input-box">
            <label htmlFor="phone">เบอร์มือถือ</label><br />
            <input type="text"  placeholder='เบอร์มือถือ' onChange={(event) => { setPhone(event.target.value) }} />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label><br />
            <input type="password" placeholder='Password' onChange={(event) => { setPassword(event.target.value) }} />
          </div>
          <div><input type="hidden" placeholder='Password' onChange={(event) => { setType(event.target.value) }} /></div>
          <p>เคยลงทะเบียนและมีบัญชีผู้ใช้อยู่แล้ว <a href='/Login'>เข้าสู่ระบบ</a></p>
          <div className="btn-register">
            <button onClick={addUsers}>สมัครสมาชิก</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Register