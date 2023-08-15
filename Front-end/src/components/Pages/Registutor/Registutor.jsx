import React from 'react'
import './Registutor.css'
import { Link } from 'react-router-dom'

function Registutor() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };




  return (
    <div className='registutor-conatiner'>
      <h1>สมัครติวเตอร์</h1>
      <div className="form-register-tutor">
        <form action="" >
          <table>
            <tr>
              <td>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='กรุณากรอก Username' />
              </td>
              <td>
                <label htmlFor="">Password</label><br />
                <input type="password" placeholder='กรุณากรอก Password' />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">ชื่อ</label>
                <input type="text" placeholder='กรุณากรอกชื่อ' />
              </td>
              <td>
                <label htmlFor="">นาสกุล</label>
                <input type="text" placeholder='กรุณากรอกนาสกุล' />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">เบอร์โทรศัพท์</label>
                <input type="text" placeholder='กรุณากรอกเบอร์มือถือ' />
              </td>
              <td>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='กรุณากรอก Email' />
              </td>
            </tr>
            <tr>
              <td colSpan={2} >
                <label htmlFor="">ที่อยู่</label>
                <textarea placeholder='กรุณากรอกที่อยู่' cols="30" rows="5" />
              </td>
            </tr>
            <tr>
              <td colSpan={2} >
                <label htmlFor="">กล่าวแนะนำตัวเองพอสังเขป</label>
                <textarea placeholder='กรุณากรอกรายละเอียด' cols="30" rows="5" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="tutor-inputfile">
                  <span class="drop-title">กรุณาแนบรูปถ่าย</span>
                  <input type="file" id="images" accept="image/*"  />
                  <small>กรุณาแนบรูปถ่ายตนเองที่เห็นหน้าชัดเจน ไม่ใช่ภาพโปรโมท</small>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                
              </td>
            </tr>
          </table>
          <div className="policy-text">
                  <input type="checkbox"  required/><label>ฉันได้อ่านและยอมรับ<Link onClick={() => openInNewTab('/Policy')} >ข้อตกลงและเงื่อนไขการใช้งาน</Link>ของTutorlist แล้ว</label>
                </div>
              <div className="btn-confirm-registertutor">
                <button>ส่งข้อมูลการสมัคร</button>
              </div>

            </form>
          </div>

      </div>

      )
}

      export default Registutor