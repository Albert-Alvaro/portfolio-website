import { useEffect, useState } from "react"
import Loader from "react-loaders"
import './index.scss'
import AnimatedLetters from "../AniamtedLetters"
import p2_1 from "../../assets/images/p2-1.png"
import p1_1 from "../../assets/images/p1-1.png"
import p3_1 from "../../assets/images/p3-1.png"
import p4_1 from "../../assets/images/p4-1.png"
import p5_1 from "../../assets/images/p5-1.png"
import p6_1 from "../../assets/images/p6-1.png"




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
            </div>
            <div className="squares">
                <div className="square-icon">
                    <img src={p1_1} alt="recipe"/>
                    <h4>Recipe Generation App</h4>
                </div>
                <div className="square-icon">
                    <img src={p2_1} alt="survey"/>
                    <h4>Survey Question Creator </h4>
                </div>
                <div className="square-icon">
                    <img src={p3_1} alt="chat"/>
                    <h4>AI Chatbot</h4>
                </div>
                <div className="square-icon">
                    <img src={p4_1} alt="id8"/>
                    <h4>University Club Website</h4>
                </div>
                <div className="square-icon">
                    <img src={p5_1} alt="android"/>
                    <h4>Android Apps</h4>
                </div>
                <div className="square-icon">
                    <img src={p6_1} alt="pyja"/>
                    <h4>Python and Java Projects</h4>
                </div>
                <div className="square-icon">
                    <img src={p6_1} alt="pyja"/>
                    <h4>Python and Java Projects</h4>
                </div>
                <div className="square-icon">
                    <img src={p6_1} alt="pyja"/>
                    <h4>Python and Java Projects</h4>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects