import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './ShowContact.css'
import { Link } from 'react-router-dom';

function ShowContact() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContact();
    }, []);

    const getContact = () => {
        Axios.get('http://localhost:5050/showinfocontact')
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    const Deletecontact = (Contact_id) => {
        Axios.delete(`http://localhost:5050/Contact_id/${Contact_id}`).then((response) => {
            setContacts(
                contacts.filter((val) => {
                    return val.Contact_id !== Contact_id;
                })
            );
        });
    }


    return (
        <div className='showcontact-container'>
            <div >
                <h1>ข้อมูลติดต่อเรา</h1>
                
                <Link to="/admin"><button className='btn-contact-backdashboard'>กลับหน้า DashBoard</button></Link>
                <table className='pending-tutor'>
                    <thead>
                        <tr>
                            <th>ชื่อ-นามสกุล</th>
                            <th>เบอร์ติดต่อ</th>
                            <th>ข้อความที่ต้องการติดต่อ</th>
                            <th>ทำรายการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.Contact_id}>
                                <td>{contact.Contact_name}</td>
                                <td>{contact.Contact_phone}</td>
                                <td>{contact.Contact_message}</td>
                                <td className='btn-action-contact'><button className='Reject' onClick={() => Deletecontact(contact.Contact_id)}>ลบ</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowContact;
