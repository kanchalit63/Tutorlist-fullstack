import React, { useState } from 'react'
import './Profile.css'
import axios from 'axios'

function Profile() {


    const [newuser_email,setNewuser_email] = useState ()
    const [newuser_name,setNewuser_name] = useState ()
    const [newuser_surename,setNewuser_surename] = useState ()
    const [newuser_phone,setNewuser_phone] = useState ()


    return (
        <>
            <div className="profile-container">
                <div className="title-profile">
                    <div className="active-page-profile">
                        <a href=""><span>Profile</span></a>
                        <a href="/Security"><span>Security</span></a>
                        <a href="/Tutor"><span>Tutor</span></a>
                    </div>
                </div>
                <div className="content-profile-container">
                    <section>
                        <div className="content-two-profile">
                            <div className="title-two-profile">Accout Details</div>
                            <form action="">
                                <div className="detail-profile-container">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td colSpan="2">
                                                    <label htmlFor="">Email Address</label><br />
                                                    <input type="text" placeholder='name@example.com' onChange={(event) => { setNewUser_email(event.target.value) }} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label htmlFor="">First name</label><br />
                                                    <input type="text" placeholder='Firstname' onChange={(event) => { setNewUser_name(event.target.value) }} />
                                                </td>
                                                <td>
                                                    <label htmlFor="">Last name</label><br />
                                                    <input type="text" placeholder='Lastname' onChange={(event) => { setNewUser_surename(event.target.value) }} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label htmlFor="">Phone number</label><br />
                                                    <input type="text" placeholder='000-000-0000' onChange={(event) => { setNewUser_phone(event.target.value) }} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="btn-save-profile">
                                    <button >Save Change</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default Profile