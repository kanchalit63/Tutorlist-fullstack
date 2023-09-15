import React from 'react'
import './Contact.css'
import Footer from '../../Footer/Footer'
import { useState } from 'react'
import Axios from 'axios'

function Contact() {


  const [contactlist, setContactlist] = useState([])

  const [contactname, setContactname] = useState("")
  const [contactphone, setContactphone] = useState("")
  const [contactmessage, setContactmessage] = useState("")



  // Insert ข้อมูล Contact

  const addContact = () => {
    Axios.post('http://localhost:5050/addcontact', {
      contactname: contactname,
      contactphone: contactphone,
      contactmessage: contactmessage
    }).then(() => {
      setContactlist([
        ...contactlist,
        {
          contactname: contactname,
          contactphone: contactphone,
          contactmessage: contactmessage
        }
      ])
    })
  }



  return (
    <>
      <div className='contact-container'>
        <div className="contact-form">
          <form action="">
            <h1>ติดต่อเรา</h1>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="">ชื่อ-นาสกุล</label><br />
                    <input type="text" placeholder='กรุณากรอกชื่อและนาสกุล' onChange={(event) => { setContactname(event.target.value) }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">เบอร์ติดต่อ</label><br />
                    <input type="text" placeholder='กรุณากรอกเบอร์มือถือ' onChange={(event) => { setContactphone(event.target.value) }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">ข้อความที่ต้องการติดต่อ</label><br />
                    <textarea name="" id="" rows="5" placeholder='กรุณากรอกรายละเอียด' onChange={(event) => { setContactmessage(event.target.value) }}></textarea>
                  </td>
                </tr>
              </tbody>

            </table>
            <div className="submit-contact" >
              <button onClick={addContact}>ส่งข้อมูล</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>









  )
}

export default Contact