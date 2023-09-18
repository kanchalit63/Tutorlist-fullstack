import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Confirmtutor.css';
import { Link } from 'react-router-dom';

function Confirmtutor() {
  const [pendingData, setPendingData] = useState([])

  const [approve, setApprove] = useState("Approve")
  const [reject, setReject] = useState("Reject")

  useEffect(() => {
    // ทำการร้องขอ API เพื่อดึงข้อมูลผู้ใช้ที่มีสถานะ "pending"
    axios.get('http://localhost:5050/tutor/pending')
      .then((response) => {
        setPendingData(response.data);
      })
      .catch((error) => {
        console.error('Error axios data:', error);
      });
  }, []);


  const ApproveTutor = (Tutor_id) => {
    axios.put(`http://localhost:5050/approve/tutor`, {
      Tutor_id: Tutor_id,
      Tutor_status: approve
    })
      .then(() => {
        setPendingData(
          pendingData.map((tutor) => {
            return tutor.Tutor_id === Tutor_id ? {
              ...tutor,
              tutor: approve
            } : tutor
          })
        )
        alert("ยืนยันข้อมูลติวเตอร์สำเร็จ")
        window.location.reload()
      })
      .catch((error) => {
        console.log("มีข้อผิดพลาดในการปฏิเสธติวเตอร์", error)
      })
  }

  const RejectTutor = (Tutor_id) => {
    axios.put(`http://localhost:5050/reject/tutor`, {
      Tutor_id: Tutor_id,
      Tutor_status: reject
    })
      .then(() => {
        setPendingData(
          pendingData.map((tutor) => {
            return tutor.Tutor_id === Tutor_id ? {
              ...tutor,
              tutor: reject
            } : tutor
          })
        )
        alert("ปฏิเสธข้อมูลติวเตอร์สำเร็จ")
        window.location.reload()
      })
      .catch((error) => {
        console.log("มีข้อผิดพลาดในการปฏิเสธติวเตอร์", error)
      })
  }



  return (
    <div className='continaer-confirmtutor'>
      <h1>รอยืนยันติวเตอร์</h1>
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
          {pendingData.map((tutor) => (
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
                <button className='Approve' onClick={() => { ApproveTutor(tutor.Tutor_id) }}>ยืนยัน</button>
              </td>
              <td className='btn-action-tutor'>
                <button className='Reject' onClick={() => { RejectTutor(tutor.Tutor_id) }}>ปฏิเสธ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Confirmtutor;
