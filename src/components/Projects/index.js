import { useEffect, useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AniamtedLetters"

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animated')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animated-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container projects-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                    idx={15}
                />
            </h1>

            <ul>
                <li>Recipe Gneration App</li>
                <li>Survey Question Creator</li>
                <li>AI Chatbot</li>
                <li>University Club Website</li>
            </ul>

            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects