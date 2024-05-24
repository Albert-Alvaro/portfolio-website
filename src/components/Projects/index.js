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
import p7_1 from "../../assets/images/p7-1.png"
import p8_1 from "../../assets/images/p8-1.png" 

import {motion} from "framer-motion"
import { Link } from "react-router-dom"


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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
                    <h3>(University project which earned High Distinction)</h3>
                    <div className="button-modal">
                        <Link to={{ pathname:'Projectsdesc/1'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p2_1} alt="survey"/>
                    <h4>Survey Question Creator </h4>
                    <h3>(University project which earned Distinction)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'Projectsdesc/2'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p3_1} alt="chat"/>
                    <h4>AI Chatbot</h4>
                    <h3>(Club Project)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'Projectsdesc/3'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p4_1} alt="id8"/>
                    <h4>University Club Website</h4>
                    <h3>(Club Project)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'Projectsdesc/4'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p5_1} alt="android"/>
                    <h4>Android Apps</h4>
                    <h3>(University project which earned Credit)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'Projectsdesc/5'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p6_1} alt="pyja"/>
                    <h4>Python and Java Projects</h4>
                    <h3>(University projects which earned Distinctions)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'Projectsdesc/6'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p7_1} alt="pyja"/>
                    <h4>3D Model Projects</h4>
                    <h3>(University project which earned High Distinction)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'Projectsdesc/7'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            READ MORE
                        </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="square-icon">
                    <img src={p8_1} alt="pyja"/>
                    <h4>Web Game 1 : 2048</h4>
                    <h3>(Personal Project)</h3>
                    <div className="button-modal">
                    <Link to={{ pathname:'game1'}}>
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className="button-1"
                        >
                            Play Demo!
                        </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects