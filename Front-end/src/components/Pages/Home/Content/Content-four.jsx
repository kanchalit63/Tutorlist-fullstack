import React from 'react'
import './content-four.css'

function Contentfour() {
  return (
    <div>
      
        <div className="content-four-container">
        <p>ตัวอย่างรายวิชาที่สอน</p>
            <div className="space-content-four">
            <div className="content-bg-one">
              <img src="/src/components/img/main/English.png" alt="" />
              <p>ภาษาอังกฤษ</p>
            </div>
            <div className="content-bg-two">
            <img src="/src/components/img/main/maths.png" alt="" />
              <p>คณิตศาสตร์</p>
            </div>
            <div className="content-bg-three">
            <img src="/src/components/img/main/flask.png" alt="" />
              <p>วิทยาศาสตร์</p>
            </div>
            <div className="content-bg-four">
            <img src="/src/components/img/main/coding-book.png" alt="" />
              <p>คอมพิวเตอร์</p>
            </div>
            <div className="content-bg-five">
            <img src="/src/components/img/main/chinese-flag.png" alt="" />
              <p>ภาษาจีน</p>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Contentfour