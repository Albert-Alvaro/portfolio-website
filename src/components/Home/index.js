import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a.png'
import './index.scss'


const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,  <br /> I'm
                <img src={LogoTitle} className="name" alt="developer" />
                lbert
                <br />
                Software and Web Developer
                </h1>
                <h2>Backend developer / Python developer / AI enthusiast</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home