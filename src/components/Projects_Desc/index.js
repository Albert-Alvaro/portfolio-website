import { Link, useParams } from 'react-router-dom'
import './index.scss'
import {data} from '../../data'
import p1_1 from "../../assets/images/p1-1.png"
import p1_2 from "../../assets/images/p1-2.png"
import p1_3 from "../../assets/images/p1-3.png"
import p2_1 from "../../assets/images/p2-1.png"
import p2_2 from "../../assets/images/p2-2.png"
import p2_3 from "../../assets/images/p2-3.png"
import p3_1 from "../../assets/images/p3-1.png"
import p3_2 from "../../assets/images/p3-2.png"
import p3_3 from "../../assets/images/p3-3.png"
import p4_1 from "../../assets/images/p4-1.png"
import p4_2 from "../../assets/images/p4-2.png"
import p4_3 from "../../assets/images/p4-3.png"
import p5_1 from "../../assets/images/p5-1.png"
import p6_1 from "../../assets/images/p6-1.png"
import p7_1 from "../../assets/images/p7-1.png"
import p7_2 from "../../assets/images/p7-2.png"
import p7_3 from "../../assets/images/p7-3.png"
import {motion} from "framer-motion"
import Loader from 'react-loaders'
import Slider from '../Slider'
const img = [
    {
        ig: "p1_1",
        image: p1_1,
        imageList: [p1_1, p1_2, p1_3]
    },
    {
        ig: "p2_1",
        image: p2_1,
        imageList: [p2_1,p2_2,p2_3]
    },
    {
        ig: "p3_1",
        image: p3_1,
        imageList: [p3_1,p3_2,p3_3]
    },
    {
        ig: "p4_1",
        image: p4_1,
        imageList: [p4_1,p4_2,p4_3]
    },
    {
        ig: "p5_1",
        image: p5_1,
        imageList: [p5_1]
    },
    {
        ig: "p6_1",
        image: p6_1,
        imageList: [p6_1]
    },
    {
        ig: "p7_1",
        image: p7_1,
        imageList: [p7_1, p7_2, p7_3]
    }
]

const Projectdesc = () => {

    const {id} = useParams()
    const image = ["p",id,"_1"]
    let igd = image.join("");
    const spec_img = img.find(imeg => (imeg.ig === igd))
    const spec_data = data.find(cont => (cont.ids === id))
    return(
        <>
        <div className='container project-desc'>
            
            <div className='cont'>
                <div className='text-zone'>
                    <p>{spec_data.content}</p>
                    <div className='img-slider'>
                        <Slider slides={spec_img.imageList}/>
                    </div>
                </div>
                <div className='back'>
                        <Link to={{ pathname:'/projects'}}>
                            <motion.button
                                whileHover={{ scale: 1.1}}
                                whileTap={{scale:0.9}}
                                className="button-1"
                            >
                                Back
                            </motion.button>
                        </Link>
                    </div>
                </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}


export default Projectdesc
