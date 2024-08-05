import React, { useState } from 'react'
import '../Style/contact.css'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm()
    const [state, setState] = useState(false)

    const onSubmit = (res) => {
        console.log(res)
    }


    const handleOnSend = () => {
        if(isValid){
            setState(true)
        }
    }

  return (
    <div className='contact-container'>
        <div className={isValid === true ? 'contact-content-completed' : 'contact-content'}>
            <h1>Contacto</h1>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-items'>
                    <input type='email' placeholder='nombre@email.com' {...register("email", {
                        required: true
                    })}/>
                    <label>Correo electronico</label>
                    {errors?.email?.type === "required" && <p className='contact-error'>*Este espacio no debe estar vacío*</p>}
                </div>
                <div className='contact-items'>
                    <input type='text' placeholder='Nuevo asunto' {...register("subject", {
                        required: true
                    })}/>
                    <label>Asunto</label>
                    {errors?.subject?.type === "required" && <p className='contact-error'>*Este espacio no debe estar vacío*</p>}
                </div>
                <div className='contact-items'>
                    <textarea placeholder='Escribe más de 40 caracteres' {...register("message", {
                        required: true,
                        minLength: 40
                    })}/>
                    <label >Mensaje</label>
                    {errors?.message?.type === "required" && <p className='contact-error'>*Este espacio no debe estar vacío*</p>}
                    {errors?.message?.type === "minLength" && <p className='contact-error'>*Debes escribir más de 40 caracteres*</p>}
                </div>
                <input type="submit" value="Enviar" onClick={() => handleOnSend()}/>
                <div className='contact-valid'>
                 {isValid === true ? <p>Datos completos</p> : <span>Llena todos los campos</span>}
                </div>
                
                <input type="checkbox" id="overflow-closed" style={{display: "none"}}/>
                {state === true && 
                <div className='contact-overlow'>
                    <label className='contact-label-close' htmlFor='overflow-closed'>
                        <p>X</p>
                    </label>
                    <div className='contact-content-message'>
                        <h4>El mensaje se ha enviado correctamente</h4>
                    </div>
                </div>}
            </form>
        </div>
        
    </div>
  )
}

export default Contact