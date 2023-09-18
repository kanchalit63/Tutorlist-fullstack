import { useEffect, useState } from 'react';
import './admin.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import axios from 'axios';



function admin() {

    const [subjectlist, setSubjectlist] = useState([]); //ตัวแปรรับข้อมูลทั้งหมด
    const [subject_name, setSubject_name] = useState(''); // ตัวแปร Insert ข้อมูล
    const [tutorlist,setTutorlist] = useState([])



    const [isSubjectVisible, setIsSubjectVisible] = useState(false);


    const [newSubject_name, setNewSubject_name] = useState(0) //เป็นการสร้าง State สำหรับ การ Update ข้อมูลของ subject


    // modal insert เพิ่มข้อมูล
    const [isPopupsubjectVisible, setPopupsubjectVisible] = useState(false);

    const openPopupaddsubject = () => {
        setPopupsubjectVisible(true);
    };

    const closePopupaddsubject = () => {
        setPopupsubjectVisible(false);
    };
    //---------------------------------------------------------------------------------------------------------------//

    // modal update อัพเดตข้อมูล
    const [isPopupsubjectupdateVisible, setPopupsubjectupdateVisible] = useState(false);

    const openPopupupdatesubject = () => {
        setPopupsubjectupdateVisible(true)
    }

    const closePopupupdatesubject = () => {
        setPopupsubjectupdateVisible(false)
    }

    //---------------------------------------------------------------------------------------------------------------//

    useEffect(() =>{
        Axios.get('http://localhost:5050/showtutor')
        .then((response) => {
            setTutorlist(response.data)
        })
        .catch((error) => {
            console.log('Error Axios data : ' , error)
        })
    })



    // Proportion Function Subject หรือ สัดส่วนของรายวิชา
    // Show subject
    const toggleSubjectVisibility = () => {
        Axios.get('http://localhost:5050/showsubject').then((response) => {
            setSubjectlist(response.data);
            setIsSubjectVisible(!isSubjectVisible);
        });
    };

    //Insert Subject
    const Addsubject = () => {
        Axios.post('http://localhost:5050/addsubject', {
            subject_name: subject_name,
        }).then(() => {
            setSubjectlist([
                ...subjectlist,
                {
                    subject_name: subject_name,
                }
            ])
        })
    }


    //Delete Subject
    const Deletesubject = (Subject_id) => {
        Axios.delete(`http://localhost:5050/deletesubject/${Subject_id}`).then((response) => {
            setSubjectlist(
                subjectlist.filter((val) => {
                    return val.Subject_id !== Subject_id;
                })
            );
        });
    };


    //Update Subject

    const updateSubject = (Subject_id) => {
        Axios.put(`http://localhost:5050/updatesubject`, {
            Subject_id: Subject_id,
            subject_name: newSubject_name
        })
            .then(() => {
                setSubjectlist(
                    subjectlist.map((val) => {
                        return val.Subject_id === Subject_id ? {
                            ...val,
                            subject_name: newSubject_name
                        } : val;
                    })
                );
                closePopupupdatesubject();
            })
            .catch((error) => {
                console.error('Error updating subject:', error);
            });
    };





    // ปิดสัดส่วนรายวิชา

    return (
        <div className='adminpage-container'>
            <h1 >ADMIN PAGE</h1>
            <div className='header-btn'>
                <br />
                <button onClick={openPopupaddsubject} className='btn-insertsubject'>เพิ่มรายวิชา</button>
                {isPopupsubjectVisible && (
                    <div className="popup">
                        <div className="popup-content">
                            <form>
                                <label htmlFor="">ชื่อรายวิชา</label><br />
                                <input type="text" placeholder='กรอกชื่อรายวิชาที่ต้องการจะเพิ่ม' onChange={(event) => { setSubject_name(event.target.value) }} />
                                <br />
                                <button className='btn-confirm' onClick={Addsubject}>เพิ่มข้อมูล</button>
                                <button className="btn-close" onClick={closePopupaddsubject} style={{ marginLeft: 5 }}>ปิด</button>
                            </form>

                        </div>
                    </div>
                )}
                {isPopupsubjectVisible && (
                    <div className="popup-overlay" onClick={closePopupaddsubject}></div>
                )}
                <Link to="/Confirmtutor"> <button className='btn-checktutor'>ตรวจสอบติวเตอร์</button></Link>
                <Link to="/ShowContact"><button className='btn-checkcontact'>ตรวจสอบข้อมูลการติดต่อ</button></Link>
                <Link to="/Showtutor"><button className='btn-checktutor'>รายชื่อติวเตอร์</button></Link>
                <br />
            </div>
            <hr />
            <div className="btn-info-subject">
                <button className="btn-showsubject" onClick={toggleSubjectVisibility}>
                    {isSubjectVisible ? 'ซ่อนข้อมูลรายวิชา' : 'แสดงข้อมูลรายวิชา'}
                </button>
                {isSubjectVisible && (
                    <div >
                        {subjectlist.map((val, key) => {
                            return (
                                <div key={key} className='edit-insert-container' >
                                    <p>ชื่อวิชา : {val.Subject_name}</p>
                                    <div className="info-subject">
                                        <button className='btn-edit-subejct' onClick={openPopupupdatesubject}>แก้ไข</button>
                                        {isPopupsubjectupdateVisible && (
                                            <div className="popup">
                                                <div className="popup-content">
                                                    <form>
                                                        <label htmlFor="">ชื่อรายวิชา</label><br />
                                                        <input type="text" placeholder='กรอกชื่อรายวิชาที่ต้องการจะเพิ่ม' onChange={(event) => { setNewSubject_name(event.target.value) }} />
                                                        <br />
                                                        <button className='btn-confirm' onClick={() => { updateSubject(val.Subject_id) }}>อัพเดตข้อมูล</button>
                                                        <button className="btn-close" onClick={closePopupupdatesubject} style={{ marginLeft: 5 }}>ปิด</button>
                                                    </form>

                                                </div>
                                            </div>
                                        )}
                                        {isPopupsubjectupdateVisible && (
                                            <div className="popup-overlay" onClick={closePopupupdatesubject}></div>
                                        )}

                                        <button className='btn-delete-subejct' onClick={() => Deletesubject(val.Subject_id)}>ลบ</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <hr />
            </div>

          


        </div>
    );
}

export default admin;