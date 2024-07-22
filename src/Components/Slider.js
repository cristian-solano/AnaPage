import React, { useEffect, useRef, useState } from 'react'
import '../Style/slider.css'
import left from '../Images/left.png'
import right from '../Images/right.png'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);
    const slides = [
      { id: 1, content: [
        {
            special: "principal",
            name: "Ana Lucía Jaramillo Ortiz",
            title: "Psicologa Clínica",
        }, 
      ]},
      { id: 2, content: [
        {
            special: "college",
            name: "Psicologa Clínica y de la familia",
            title: "Universidad Santo Tomas",
        }
      ]}
    ];
  
    const startSlideShow = () => {
      slideInterval.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 5000); // Cambia cada 10 segundos
    };
  
    const stopSlideShow = () => {
      clearInterval(slideInterval.current);
    };
  
    const handleNext = () => {
      stopSlideShow();
      setCurrentIndex((currentIndex + 1) % slides.length);
      startSlideShow();
    };
  
    const handlePrev = () => {
      stopSlideShow();
      setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
      startSlideShow();
    };
  
    useEffect(() => {
      startSlideShow();
      return () => stopSlideShow();
    }, []);
  
    return (
      <div className='slider-container'>
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              {slide.content && slide.content.map(items => (
                items.special === "principal" ? 
                <div className='slider-content'>
                    <h3>{items.name}</h3>
                    <div className='slider-items'>
                        <p>{items.title}</p>
                    </div>
                </div>
                : <div className='slider-content'>
                    <h4>{items.name}</h4>
                    <div className='slider-items'>
                        <p>{items.title}</p>
                    </div>
                  </div>
              ))}
            </div>
          ))}
        </div>
        <div className='slider-buttons'>
            <button onClick={handlePrev}>
                <img src={left} alt='left'/>
            </button>
            <button onClick={handleNext}>
                <img src={right} alt='right'/>
            </button>
        </div>
        
      </div>
    );
}

export default Slider