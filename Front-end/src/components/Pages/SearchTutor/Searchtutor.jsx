import React from 'react'
import './Searchtutor.css'
import Footer from '../../Footer/Footer'

function Searchtutor() {
  return (
    <>
      <div className="search-container">
        <form action="">
          <div className="searching-bar">
            <input type="search" placeholder='คุณกำลังมองหาวิชาอะไรอยู่กันหล่ะ' /><button>ค้นหา</button>
          </div>
        </form>
        <div className="recommend-subject">
          <div className="subject-recommend">
            <img src="/src/components/img/main/english.png" alt="" />
            <p>ภาษาอังกฤษ</p>
          </div>
          <div className="subject-recommend">
          <img src="/src/components/img/main/maths.png" alt="" />
          <p>คณิตศาสตร์</p>
          </div>
          <div className="subject-recommend">
          <img src="/src/components/img/main/flask.png" alt="" />
          <p>วิทยาศาสตร์</p>
          </div>
          <div className="subject-recommend">
          <img src="/src/components/img/main/coding-book.png" alt="" />
          <p>คอมพิวเตอร์</p>
          </div>
          <div className="subject-recommend">
          <img src="/src/components/img/main/chinese-flag.png" alt="" />
          <p>ภาษาจีน</p>

          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Searchtutor