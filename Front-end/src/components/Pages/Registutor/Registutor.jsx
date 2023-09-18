import React, { useState } from 'react'
import './Registutor.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Registutor() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const [tutorlist, setTutorlist] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surename, setSurename] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [about, setAbout] = useState("")
  const [img, setImg] = useState("")



  const addTutor = () => {
    axios.post('http://localhost:5050/Register_tutor', {
      Tutor_username: username,
      Tutor_password: password,
      Tutor_name: name,
      Tutor_surename: surename,
      Tutor_tel: tel,
      Tutor_email: email,
      Tutor_address: address,
      Tutor_about: about,
      Tutor_img: img
    })
      .then((response) => {
        if (response.status === 200) {
          alert("สร้างสมาชิกเสร็จสิ้น กรุณารอยืนยันจากแอดมิน")

          setTutorlist([
            ...tutorlist,
            {
              Tutor_username: username,
              Tutor_password: password,
              Tutor_name: name,
              Tutor_surename: surename,
              Tutor_tel: tel,
              Tutor_email: email,
              Tutor_address: address,
              Tutor_about: about,
              Tutor_img: img
            }
          ])
        } else {
          console.log("Error Register Tutor")
        }
      })
      .catch((error) => {
        console.log ("Error:" , error)
      })
  }



  return (
    <div className='registutor-conatiner'>
      <h1>สมัครติวเตอร์</h1>
      <div className="form-register-tutor">
        <form action="" >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='กรุณากรอก Username' onChange={(event) => { setUsername(event.target.value) }} />
                </td>
                <td>
                  <label htmlFor="">Password</label><br />
                  <input type="password" placeholder='กรุณากรอก Password' onChange={(event) => { setPassword(event.target.value) }}/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">ชื่อ</label>
                  <input type="text" placeholder='กรุณากรอกชื่อ' onChange={(event) => { setName(event.target.value) }}/>
                </td>
                <td>
                  <label htmlFor="">นาสกุล</label>
                  <input type="text" placeholder='กรุณากรอกนาสกุล' onChange={(event) => { setSurename(event.target.value) }}/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">เบอร์โทรศัพท์</label>
                  <input type="text" placeholder='กรุณากรอกเบอร์มือถือ'onChange={(event) => { setTel(event.target.value) }} />
                </td>
                <td>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='กรุณากรอก Email' onChange={(event) => { setEmail(event.target.value) }}/>
                </td>
              </tr>
              <tr>
                <td colSpan={2} >
                  <label htmlFor="">ที่อยู่</label>
                  <textarea placeholder='กรุณากรอกที่อยู่' cols="30" rows="5" onChange={(event) => { setAddress(event.target.value) }}/>
                </td>
              </tr>
              <tr>
                <td colSpan={2} >
                  <label htmlFor="">กล่าวแนะนำตัวเองพอสังเขป</label>
                  <textarea placeholder='กรุณากรอกรายละเอียด' cols="30" rows="5" onChange={(event) => { setAbout(event.target.value) }}/>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="tutor-inputfile">
                    <label htmlFor="">กรุณากรอก URL รูปภาพ</label>
                    <input type="text" placeholder='กรุณากรอก Url รูปภาพ' onChange={(event) => { setImg(event.target.value) }}/>
                    <small>กรุณาอัพโหลดภาพลงใน Google Drive และนำ Url มาใส่ในช่อง <br />(อย่าลืมเปิดสารณะ)</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>

                </td>
              </tr>
            </tbody>

          </table>
          <div className="policy-text">
            <input type="checkbox" required /><label>ฉันได้อ่านและยอมรับ<Link onClick={() => openInNewTab('/Policy')} >ข้อตกลงและเงื่อนไขการใช้งาน</Link>ของTutorlist แล้ว</label>
          </div>
          <div className="btn-confirm-registertutor">
            <button onClick={addTutor} >ส่งข้อมูลการสมัคร</button>
          </div>

        </form>
      </div>

    </div>

  )
}

export default Registutor