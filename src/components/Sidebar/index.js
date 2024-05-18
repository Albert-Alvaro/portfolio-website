import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Link className='logo' to='/'>
            <img src={LogoA} alt='Logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='Logo' />
        </Link>
        <nav>
            <NavLink exact="True" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="True" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="True" activeclassname="active" className='projects-link' to="/projects">
                <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/albert-alvaro-a5573224a/'>
                  <FontAwesomeIcon icon ={faLinkedin} color='#4d4d4e' />  
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Albert-Alvaro?tab=overview&from=2024-04-01&to=2024-04-30'>
                  <FontAwesomeIcon icon ={faGithub} color='#4d4d4e' />  
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar