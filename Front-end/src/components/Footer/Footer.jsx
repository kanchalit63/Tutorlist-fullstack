import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className="footer-container">
        <section>
          <div className="footer-one">
            <img src="/src/components/img/main/Tutorlist-test.png" alt="" />
            
            <div >
            <h3 >TUTORLIST</h3>
              <Link to="/News">ข่าวสารและโปรโมชั่น</Link>
              <Link to="/Registutor">สมัครติวเตอร์</Link>
              <Link to="/About">เกี่ยวกับเรา</Link>
            </div>
          </div>
          
        </section>
        <section>
          <div className="footer-two">
            <h3>Contact Us</h3>
            <div className='img-footer-two'>
              <a href='https://facebook.com'><img src="/src/components/img/main/facebook.png" alt=""  /></a>
              <a href='https://line.me'><img src="/src/components/img/main/line.png" alt="" /></a>
              <a href='https://twitter.com'><img src="/src/components/img/main/twitter.png" alt="" /></a>
              <a href='https://instagram.com'><img src="/src/components/img/main/instagram.png" alt="" /></a>
            </div>
            <p>เบอร์โทร 000000000</p>
            <p>ที่อยู่</p>
            <p>98, Pa Pong, Doi Saket District, Chiang Mai 50220</p>
          </div>
        </section>
      </div>


      <div className="bg-footer">
        <span>&copy; www.tutorlist.com ALL RIGHTS RESERVED.</span>
      </div>


    </>
  )
}

export default Footer

