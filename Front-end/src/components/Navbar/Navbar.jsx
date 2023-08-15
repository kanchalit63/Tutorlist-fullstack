
import { Link } from 'react-router-dom'
import './Navbar.css'
import { NavbarItems } from './NavbarItem'
import Login from '../Pages/Login/Login'




function Navbar() {

  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <nav className='Navbar-container'>
        <div className='navbar-logo'>
            <img src='/src/components/img/Logo.png' alt=''></img>
        </div>
        <ul class="nav-links">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link onClick={() => openInNewTab('/Registutor')}>สมัครติวเตอร์</Link></li>
            <li><Link to={'/About'}>เกี่ยวกับเรา</Link></li>
            <li><Link to={'/Contact'}>ติดต่อเรา</Link></li>
            <li><Link to="/Login"><button>Sign Up</button> </Link></li>
        </ul>
        
    </nav>
  )
}

export default Navbar