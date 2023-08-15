import React from 'react'
import './content-three.css'

function Contentthree() {
    return (
        <div className='header-content-three'>
            <h1>ระดับชั้นที่สอน</h1>
            <div className="content-three-container">
                 
                <section className='content-three-left'>
                    <div className="three-left-one">
                        <img src="/src/components/img/main/1.png" alt="" />
                        <h2>เตรียมอนุบาล - อนุบาล</h2>
                        <span>วิชาพื้นฐานทั่วไป คณิตศาสตร์ การนับเลข บวกลบเลข
                            ภาษาอังกฤษ ภาษาไทย รู้จักตัวอักษร สระ วรรณยุกต์
                            การออกเสียง การฟัง ฝึกการเขียน เชาว์ปัญญา และวิชาอื่นๆ</span>
                    </div>
                    <div className="three-left-two">
                        <img src="/src/components/img/main/student (1).png" className='student-two' />
                        <img src="/src/components/img/main/student.png" className='student-one' />

                        <h2>มัธยมศึกษา</h2>
                        <span>เตรียมตัวปรับพื้นฐานเนื้อหาระดับมัธยมศึกษา วิชาคณิตศาสตร์ วิทยาศาสตร์ ภาษาอังกฤษ ภาษาไทย สังคมศึกษา ทบทวนเนื้อหาเตรียมสอบ ติวสอบเข้าระดับ ม.ปลาย ติวสอบแข่งขัน</span>
                    </div>
                    <div className="three-left-three">
                        <img src="/src/components/img/main/student (3).png" alt="" />
                        <h2>มหาวิทยาลัย</h2>
                        <span>หาติวเตอร์ปรับพื้นฐานวิชาเฉพาะทางแต่ละคณะ / สาขา วิชาแคลคูลัส สถิติ ฟิสิก์ เคมี ชีวะ การเงิน บัญชี ภาษาต่างประเทศ ความถนัดทางวิศวกรรม ความถนัดแพทย์ วิชาเฉพาะทางอื่นๆ</span>
                    </div>
                </section>

                <section className='content-three-right'>
                    <div className="three-right-one">
                        <img src="/src/components/img/main/elementary-school.png" alt="" />
                        <h2>ประถมศึกษา</h2>
                        <span>วิชาคณิตศาสตร์ วิทยาศาสตร์ ภาษาอังกฤษ ภาษาไทย ศิลปะ คอมพิวเตอร์ กิจกรรมเสริมการเรียนรู้ ทบทวนเนื้อหา สอนการบ้านทั่วไป</span>
                    </div>
                    <div className="three-right-two">
                        <img src="/src/components/img/main/student (2).png" alt="" />
                        <h2>มัธยมศึกษาตอนปลาย</h2>
                        <span>ปรับพื้นฐาน ฝึกวิเคราะห์โจทย์ ฝึกการแก้ปัญหา เทคนิคการทำข้อสอบ เตรียมสอบแข่งขันระดับประเทศ TGAT, TPAT, TCAS, O-NET, A-LEVEL( 9 วิชาสามัญ), วิชาสอบเข้าคณะ/สาขาเฉพาะทาง</span>
                    </div>
                    <div className="three-right-three">
                        <img src="/src/components/img/main/ancestors.png" alt="" />
                        <h2>วัยทำงาน / บุคคลทั่วไป</h2>
                        <span>การเรียนภาษาเพื่อการสื่อสาร การทำงานในองค์กรต่างประเทศ หาติวเตอร์ติวสอบ TOEIC, TOEFL, IELTS ภาษาไทยชาวต่างชาติ วิชาเฉพาะทางในสายงานต่างๆ</span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contentthree