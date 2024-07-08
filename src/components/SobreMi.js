import React from 'react'
import Style from '../App.module.css';
import ImgSobreMi from '../img/1995515.png';

const SobreMi = () => {
  return (
    <section id='sobremi' className={Style.section_about} >
      <h2 className={Style.texto_about}>
        Sobre <span>mi</span>
      </h2>
      <div className={Style.img_about}>
        <div data-aos="zoom-out">
        <img className={Style.img} src={ImgSobreMi} alt="imagen sobre mi" />
        </div>
        <span className={Style.circulo}></span>
      </div>
      <div className={Style.info_about}>
        <h3>Back end Junior</h3>
        <p className='container'>Estudiante de Ingenieria en sistemas de informacion y ciencias de la Computacion con un fuerte interés en la programación y el desarrollo de software.
          Con capacidad para aprender nuevas tecnologías rápidamente y trabajar en equipo.
           Empeze desde 2022 aprendiendo autodidactamente, ya que ha sido uno de mis sueños desde pqueño y me encuentro 
           buscando la oportunidad de aplicar mis habilidades y contribuir al desarrollo de proyectos emocionantes,
            Estoy dedicado a aprender y crecer continuamente. Mi ética de trabajo es sólida y
           estoy abierto a nuevas oportunidades que me permitan expandir mis habilidades y conocimientos.
        </p>
      </div>
    </section>
  )
}

export default SobreMi