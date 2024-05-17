import './index.scss'
import { useState } from 'react'

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    return (
        <div className='slider'>
            <button
                onClick={prevImage}
                className='s-button-p'
            >
                {'<'}
            </button>
            <button
                onClick={nextImage}
                className='s-button-n' 
            >
                {'>'}
            </button>
            <img 
                src={slides[currentIndex]}
                key={currentIndex}
                alt={'alt'}
                className='slider-img'
            />
            <img 
                src={slides[(currentIndex - 1 + slides.length) % slides.length]}
                key={currentIndex}
                alt={'alt'}
                className='hidden-img'
            />  
        </div>
    )
}

export default Slider