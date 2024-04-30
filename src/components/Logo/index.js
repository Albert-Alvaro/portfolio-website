import './index.scss'
import LogoA from '../../assets/images/logo-a.png'
import { useRef } from 'react'
const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef(); 

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoA} alt='A' />
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
	 width="100%" viewBox="0 0 254 249">
</svg>
        </div>
    )
}

export default Logo