import React from 'react'
import '../Style/footer.css'
import instagram from '../Images/instaIcon.png'
import linkedin from '../Images/linkedinIcon.png'
import whatsapp from '../Images/wsIcon.png'
import recons from '../Images/reconstruyendo.png'

const Footer = () => {
  return (
    <div className='home-social-media'>
        <div className='home-social-item'>
            <a href='https://www.instagram.com/reconstruyendo_historias/' target='blank'>
                <img src={instagram} alt="instagram"/>
            </a>
        </div>
        <div className='home-social-item'>
            <a href='https://www.linkedin.com/in/ana-lucia-jaramillo-ortiz/' target='blank'>
                <img src={linkedin} alt="linkedin"/>
            </a>
        </div>
        <div className='home-social-item'>
            <a href='https://wa.me/+573245327803' target='blank'> 
                <img src={whatsapp} alt="whatsapp"/>
            </a>
        </div>
        <div className='home-social-item'>
            <a href='https://www.instagram.com/reconstruyendo_historias/' target='blank'>
                <img src={recons} alt="reconst" />
            </a>
        </div>  
    </div>
  )
}

export default Footer