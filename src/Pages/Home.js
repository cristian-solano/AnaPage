import React from 'react'
import '../Style/home.css'
import sala from '../Images/sala.jpeg'
import Slider from '../Components/Slider'
import profile from '../Images/profile.jpeg'
import whaBlack from '../Images/wsBlack.png'
import mail from '../Images/mailBlack.png'
import psiment from '../Images/psimenteBlack.png'
import expertise from '../Images/expertise.png'
import college from '../Images/college.png'
import place from '../Images/lugar.png'
import special from '../Images/especialidad.png'


const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content' id="#home">
            <Slider/>
        </div>
         <div className='home-about-content' id="about">
           <div className='home-about-profile'>
                <img src={profile} alt="profile"/>
                <div className='home-about-profile-span' >
                    <h3>Ana Lucía Jaramillo</h3>
                    <div className='home-about-text'>
                        <p>Magister en Psicología Clínica</p>
                        <span>Soy psicóloga graduada Cum Laude y psicoterapeuta sistémica con una Maestría en Psicología Clínica y de la Familia de la Universidad Santo Tomás.
                        Ofrezco un entorno seguro para abordar tus dilemas, con experiencia en procesos psicoterapéuticos y de consultoría desde un enfoque sistémico, tanto a nivel individual, familiar como de pareja.
                        </span>
                    </div>
                </div>
            </div>
            
            <div className='home-about-info'>
                <div className='home-about-info-items'> 
                    <div className='home-about-info-image'>
                        <img src={college} alt="colege"/>
                    </div>
                    
                    <div className='home-about-text'>
                        <p>Universidad Santo Tomás</p>
                        <span>Pregrado en Psicologia</span>
                        <span>Posgrado en Psicología Clinica y de la familia</span>
                    </div>
                </div>
                <div className='home-about-info-items'> 
                    <div className='home-about-info-image'>
                        <img src={special} alt="colege"/>
                    </div>
                    
                    <div className='home-about-text'>
                        <p>Especialidades</p>
                        <span>Gestión de la ira
                            Ansiedad
                            Problemas de comportamiento
                            Orientación laboral
                            Habilidades de afrontamiento
                            Depresión
                            Divorcio
                            Conflictos familiares
                            Autolesión
                            Estrés
                        </span>
                    </div>
                </div>
                <div className='home-about-info-items home-about-span' style={{width: "300px"}}>
                    <h3>Ana Lucía Jaramillo</h3>
                    <div className='home-about-text'>
                        <p>Magister en Psicología Clínica</p>
                        <span>Soy psicóloga graduada Cum Laude y psicoterapeuta sistémica con una Maestría en Psicología Clínica y de la Familia de la Universidad Santo Tomás.</span>
                    </div>
                </div>
                <div className='home-about-info-items' >
                    <div className='home-about-info-image'>
                        <img src={expertise} alt="expertise"/>
                    </div>
                    
                    <div className='home-about-text'>
                        <p>Experiencia</p>
                        <span>Con más de 5 años de experiencia atendiendo pacientes con diferentes trastornos emocionales</span>
                    </div>
                </div>
                <div className='home-about-info-items' >
                    <div className='home-about-info-image'>
                        <img src={place} alt="expertise"/>
                    </div>
                    
                    <div className='home-about-text'>
                        <p>Consultorio</p>
                        <span>Cra. 17 #150-52, Bogotá</span>
                        <span>Idioma Castellano</span>
                    </div>
                </div>
            </div>   
        </div>
        
        
        <div className='home-appoint-content' id="contact">
            <div className='home-contact-sections'>
                <a href="mailto:analu.jaor@gmail.com" target='blank'>
                    <img src={mail} alt="mail"/>
                    <p>Enviar un correo electronico</p>
                </a>
                <a href="https://wa.me/+573245327803" target='blank'>
                    <img src={whaBlack} alt="whatsappblack"/>
                    <p>Enviar un mensaje por whatsapp</p>
                </a>
                <a href="https://psicologiaymente.com/psicologos/2068526/ana-lucia-jaramillo-ortiz" target='blank'>
                    <img src={psiment} alt="psicologia"/>
                    <p>Directamente de Psicología y mente</p>
                </a>
            </div>
            <div className='home-location'>
                <iframe title="Consultorio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2196787643447!2d-74.04561522496135!3d4.731864095243265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f856f411dd7bd%3A0x9b98c54e0d74414!2sCra.%2017%20%23150-52%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1721167865200!5m2!1ses!2sco" style={{border:"1px solid gray"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Home


//  <div className='home-information'>
// <div className='home-address'>
// <p>Psicoterapia sistémica</p>
// <span>Cra. 17 #150-52, Bogotá</span>
// </div>
// <div className='home-address'>
// <p>Especialidades</p>
// <span>Gestión de la ira, Ansiedad, Problemas de comportamiento, Orientación laboral, Habilidades de afrontamiento
//     , Depresión, Divorcio,Conflictos familiares, Autolesión, Estrés</span>
// </div>
// </div>