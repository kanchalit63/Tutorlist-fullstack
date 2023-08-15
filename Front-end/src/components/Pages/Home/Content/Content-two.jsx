import React from 'react'
import './content-two.css'
import Content2 from '../../../img/main/content2-1.jpg'
function Contenttwo() {
  return (
    <div className="content-two-container">
        <section className='content-two-left'>
            <ul>
            <h1>เรียนนอกสถานที่ / เรียนที่บ้าน</h1>
            <p>เรียนแบบนี้ดีอย่างไหร่</p>
                <li>สามารถหาติวเตอร์ที่ตัวเองสนใจและตรงตามหัวข้อการเรียนที่ตัวเองสนใจ</li>
                <li>สอบถามเนื้อหาหรือหัวข้อที่ตัวเองไม่เข้าใจ</li>
                <li>กำหนดเวลาเรียนหรือเวลาไหนก็ได้เมื่อตนเองว่าง</li>
                <li>มีสมาธิและจดจ่อกัะลการเรียนได้ดียิ่งขึ้น</li>
                <li>ชำระเงินเป็นคอร์สหรือต่อครั้งตามตกลงกับติวเตอร์</li>
            </ul>
        </section>
        <section className='content-two-right'>
            <span className='content2-1'>
            <img src="/src/components/img/main/content2-1.jpg" />
            </span>
            <span className='content2-2'><img src="/src/components/img/main/content2-2.jpeg" /></span>
            <span className='content2-3'><img src="/src/components/img/main/content2-3.jpg" /></span>
        </section>
        
    </div>
  )
}

export default Contenttwo