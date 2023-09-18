import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Showtutor() {

  const [tutorlist, setTutorlist] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5050/tutor/approve')
      .then((response) => {
        setTutorlist(response.data);
      })
      .catch((error) => {
        console.error('Error axios data:', error);
      });
  }, []);

  const DeleteTutor = (Tutor_id) => {
    axios.delete(`http://localhost:5050/tutor/${Tutor_id}`).then((response) => {
      setTutorlist((prevTutorlist) => {
        return prevTutorlist.filter((tutor) => tutor.Tutor_id !== Tutor_id);

      });
      alert("ลบข้อมูลติวเตอร์สำเร็จ")
    });
  }


  return (
    <div className='continaer-confirmtutor'>
      <h1>รายชื่อติวเตอร์</h1>
      <Link to="/admin"><button className='btn-contact-backdashboard'>กลับหน้า DashBoard</button></Link>
      <table className='pending-tutor'>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>นาสกุล</th>
            <th>เบอร์ติดต่อ</th>
            <th>อีเมลล์</th>
            <th>ที่อยู่</th>
            <th>Username</th>
            <th>Password</th>
            <th>แนะนำตัวเอง</th>
            <th>รูปภาพ</th>
            <th colSpan={2}>ทำรายการ</th>
          </tr>
        </thead>
        <tbody>
          {tutorlist.map((tutor) => (
            <tr key={tutor.Tutor_id}>
              <td>{tutor.Tutor_id}</td>
              <td>{tutor.Tutor_name}</td>
              <td>{tutor.Tutor_surename}</td>
              <td>{tutor.Tutor_tel}</td>
              <td>{tutor.Tutor_email}</td>
              <td>{tutor.Tutor_address}</td>
              <td>{tutor.Tutor_username}</td>
              <td>{tutor.Tutor_password}</td>
              <td style={{ width: "5000px" }}>{tutor.Tutor_about}</td>
              <td className="truncate-text">
                <a href={tutor.Tutor_img} target='blank'>{tutor.Tutor_img}</a>
              </td>
              <td className='btn-action-tutor'>
                <button className='Reject' onClick={() => DeleteTutor(tutor.Tutor_id)}>ลบข้อมูลติวเตอร์</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Showtutor