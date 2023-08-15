import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container-home-hero'>
     
      <div className='bg-hero' >
      <div className="hero-container">
      <h1>TUTORLIST</h1>
      <p className='header-text1-hero'>กำลังหาติวเตอร์อยู่ใช่ไหม....</p>
      <p className='header-text2-hero'>หาติวเตอร์ที่ใช่ หาประสบการณ์ที่โดนใจ สามารถเรียนตัวต่อตัวหรือออนไลน์ก็ได้ พร้อมรับฟังคำแนะนำต่าง ๆ จากผู้มีประสบการณ์มากมืออาชีพ</p>
      </div>
      <Link to="/Searchtutor" className='btn-hero'><button>ค้นหาติวเตอร์</button></Link> 
      </div>
      
      
    </div>
    
  )
}

export default Hero