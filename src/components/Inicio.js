import React from 'react'
import Style from '../App.module.css'

const Inicio = () => {
  return (
    <section id='hero' className={Style.section_hero} >
      <div className={Style.hero_contenido}>
        <h1>Hola, soy  
          <br/>
          <span> Edwin Baquiax</span> <span className={Style.tildeo}>&#160;</span></h1>
          
        <div className={Style.animacion}>
          <h3>
            Desarrollador Back end Jr
          </h3>
        </div>
        <p>Estudiante de Ingenieria en Sistemas de Informacion y Ciencias de la Computacion
        </p>
        <div className={Style.btn} >
          <a className='col' href="https://drive.google.com/file/d/1lx_QxmUxS4ottMKH51pzxlk-BzgGsIQW/view?usp=drive_link" target='blank'>
            <button className='btn btn-primary '>Descargar CV</button>
          </a>
          <a  className='col' href="https://wa.link/tg4f95" target='blank'>
            <button className='btn btn-success '>Whatsapp</button>
          </a>
        </div>
      </div>
     


    </section>
  )
}

export default Inicio