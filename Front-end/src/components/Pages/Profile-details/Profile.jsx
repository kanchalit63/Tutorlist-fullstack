import React from 'react'
import './Profile.css'

function Profile() {
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
                        <div className="content-one-profile">
                            <div className="title-one-profile">Profile Picture</div>
                            <div className="img-content-profile">
                                <img src="/src/components/img/profile/profile2.png" alt="" />
                            </div>
                            <p>JPG OR PNG no larger than 5 MB</p>
                            <div className="btn-img-profile">
                                <input type="file" id='upload' hidden />
                                <label for="upload">Upload new image</label>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="content-two-profile">
                            <div className="title-two-profile">Accout Details</div>
                            <form action="">
                                <div className="detail-profile-container">
                                    <table >
                                        <tr>
                                            <td colSpan="2">
                                                <label htmlFor="">Email Address</label><br />
                                                <input type="text" placeholder='name@example.com' />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="">First name</label><br />
                                                <input type="text" placeholder='Firstname' />
                                            </td>
                                            <td>
                                                <label htmlFor="">Last name</label><br />
                                                <input type="text" placeholder='Lastname' />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="">Phone number</label><br />
                                                <input type="text" placeholder='000-000-0000' />
                                            </td>
                                        </tr>
                                    </table>
                                    <div className="btn-save-profile">
                                        <button>Save Change</button>
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