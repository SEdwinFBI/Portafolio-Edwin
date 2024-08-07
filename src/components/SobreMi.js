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
        <h3>Desarrollador de Software</h3>
        <p className='container'> Soy un estudiante de Ing. en sistemas y ciencias de la computacion,
          desde que tengo memoria siempre me ha gustado todo sobre informatica. Soy alguien autodidacta, 
          eh venido aprendiendo y haciendo proyectos desde 2022, capacitando me en plataformas como Intecap
          Udemy, Platzi y En el programa de Oracle Next Education, tengo la capacidad de aprender rapido y
          actualmente busco la primera oportunidad para desarrollarme en este area, no cuento con mucha
          experiencia pero si con una gran pasion por programacion.
        </p>
      </div>
    </section>
  )
}

export default SobreMi