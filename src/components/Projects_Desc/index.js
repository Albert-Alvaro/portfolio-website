import { useParams } from 'react-router-dom'
import './index.scss'
import {data} from '../../data'


const Projectdesc = () => {

    const {id} = useParams()
    const spec_data = data.find(cont => (cont.ids === id))
    return(
        <div className='container project-desc'>
            <div className='text-zone'>
            <p>{spec_data.content}</p>
            </div>
        </div>
    )
}


export default Projectdesc
