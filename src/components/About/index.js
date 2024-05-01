import { useEffect, useState } from 'react'
import AnimatedLetters from '../AniamtedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animated')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animated-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>

                <p>
                    I am currently a fresh graduate who is aspiring to be a software and web developer, I am currently located in Singapore and looking for a job
                </p>
                <p>
                    I am passionate about coding and programing, enjoying the task of creating algorithms and software. I am experienced in Python and Java, and I correspondingly 
                    I am experienced with the Django and React Native framework. I have done projects which involve both frameworks.
                </p>
                <p>
                    I also have dabbled in 3D modelling, using the Autodesk Maya software to create an animation and have also dabbled in mobile app development, having used Kotlin and Java to create simple android apps.
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#fff900' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color='#007bff' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About