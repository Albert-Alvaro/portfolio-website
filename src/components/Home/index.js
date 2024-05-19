import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a.png'
import './index.scss'
import AnimatedLetters from '../AniamtedLetters'
import { useEffect, useState } from 'react'
import Logo from '../Logo'
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animated')
    const nameArray = ['l', 'b', 'e', 'r', 't']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','a','n','d',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animated-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Logo />
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>  
                <span className={`${letterClass} _12`}>i,</span>  
                <br />
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span>  
                <img src={LogoTitle} className="name" alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>
                <h2>Backend developer / Python developer / AI enthusiast</h2>
                <Link to='/about' className='flat-button'>MORE ABOUT ME</Link>
            </div>
            
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home