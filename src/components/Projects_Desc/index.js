import { useParams } from 'react-router-dom'
import './index.scss'
import {data} from '../../data'
import p2_1 from "../../assets/images/p2-1.png"
import p1_1 from "../../assets/images/p1-1.png"
import p3_1 from "../../assets/images/p3-1.png"
import p4_1 from "../../assets/images/p4-1.png"
import p5_1 from "../../assets/images/p5-1.png"
import p6_1 from "../../assets/images/p6-1.png"
import p7_1 from "../../assets/images/p7-1.png"
const img = [
    {
        ig: "p1_1",
        image: p1_1
    },
    {
        ig: "p2_1",
        image: p2_1
    },
    {
        ig: "p3_1",
        image: p3_1
    },
    {
        ig: "p4_1",
        image: p4_1
    },
    {
        ig: "p5_1",
        image: p5_1
    },
    {
        ig: "p6_1",
        image: p6_1
    },
    {
        ig: "p7_1",
        image: p7_1
    }
]

const Projectdesc = () => {

    const {id} = useParams()
    const image = ["p",id,"_1"]
    let igd = image.join("");
    const spec_img = img.find(imeg => (imeg.ig === igd))
    const spec_data = data.find(cont => (cont.ids === id))
    return(
        <div className='container project-desc'>
            <div className='text-zone'>
            <p>{spec_data.content}</p>
            <img src={spec_img.image} alt="desc"/>
            </div>
        </div>
    )
}


export default Projectdesc
