import React from 'react'
import './Contact.css'
import Footer from '../../Footer/Footer'
import { useState } from 'react'

function Contact() {


  const [contactlist,setContactlist] = useState([])



  return (
    <>
      <div className='contact-container'>
        <div className="contact-form">
          <form action="">
            <h1>ติดต่อเรา</h1>
            <table>
              <tr>
                <td>
                  <label htmlFor="">ชื่อ-นาสกุล</label><br />
                  <input type="text" placeholder='กรุณากรอกชื่อและนาสกุล' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">เบอร์ติดต่อ</label><br />
                  <input type="text" placeholder='กรุณากรอกเบอร์มือถือ' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">ข้อความที่ต้องการติดต่อ</label><br />
                  <textarea name="" id="" rows="5" placeholder='กรุณากรอกรายละเอียด' ></textarea>
                </td>
              </tr>
            </table>
            <div className="submit-contact">
              <button>ส่งข้อมูล</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>









  )
}

export default Contact