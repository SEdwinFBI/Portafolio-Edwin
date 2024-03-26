import React from 'react'
import '../App.module.css'
import estilos from '../App.module.css';
import Card from './Card';

const Proyectos = () => {
  return (
    <section className={estilos.section_proyectos} id='works'>
      <div>
        <h1 className='text-center'>Portafolio de proyectos </h1>
      </div>
      <div className='p1'>  {/*inicio parte 1*/}
        <h2 className='text-center'>proyectos basicos</h2>
        <div className='row row-cols-1 row-cols-sm-3 '> {/*inicio columnas y filas*/}

          <Card imagenUrl='https://summa.es/blog/wp-content/uploads/2018/09/iStock-865230556-1280x720.jpg'
            titulo='Diseño y Grabacion'
            descripcion='Pagina web de un estudio de diseño '
            href='https://sedwinfbi.github.io/dise-oygrabaciones/'
            tech='HTML5, CSS3, Javascript' />
          <Card imagenUrl='https://phantom-elmundo.unidadeditorial.es/2246744589a364769c37ad17084dffd7/f/jpg/assets/multimedia/imagenes/2023/08/21/16926502279891.jpg'
            titulo='Producciones Juvenil'
            descripcion='Pagina web sobre una productora que se dedica transmisiones y videos '
            href='https://sedwinfbi.github.io/juvenil/'
            tech='HTML5, CSS3' />
          <Card imagenUrl='https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg'
            titulo='Programa Ya!'
            descripcion='Sitio web sobre servicios de programadores'
            href='https://sedwinfbi.github.io/programaya/'
            tech='HTML5, CSS3' />

          <Card imagenUrl='https://i.pinimg.com/736x/20/d8/fb/20d8fb8426416fa8ed15749a7a821d16.jpg'
            titulo='Green tree'
            descripcion='Este fue una pagina que realize para el proyecto de seminario para mi graduacion como Perito Contador - creado a finales de 2022 '
            href='https://green-tree2022.netlify.app/'
            tech='HTML5, CSS3' />

          <Card imagenUrl='https://m.media-amazon.com/images/I/51HrrEbfYWL._AC_SL1500_.jpg'
            titulo='Stick Lamp'
            descripcion='Este fue una pagina que realize para mi proyecto de emprendimiento - creado a finales de 2022 '
            href='https://stik-lamp.netlify.app/'
            tech='HTML5, CSS3' />

<Card imagenUrl='https://cdn5.dibujos.net/dibujos/pintados/201603/calculadora-solar-colegio-10377919.jpg'
            titulo='Mi primier proyecto'
            descripcion='Este fue uno de los primer proyectos que realize, fue una calculadora basica pero funcional - creado a mediados de 2022 '
            href='https://edwinbxix.netlify.app/seccion/calculadora'
            tech='HTML5, CSS3, JAVASCRIPT' />
        </div> {/*fin columnas y filas*/}
      </div>{/*fin  parte 1*/}
      <div>{/*inicio parte 2*/}
        <h2 className='text-center'>Proyectos en desarrollo Back end</h2>
        <div className='row row-cols-1 row-cols-sm-3 '>{/*inicio columnas y filas*/}
          <Card imagenUrl='https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png'
            titulo='Coming soon'
            descripcion='En desarrollo, aplicaciones web o apis'
            tech='se espera desarrollar con Java- Spring boot o React' />

          <Card imagenUrl='https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png'
            titulo='Coming soon'
            descripcion='En desarrollo, aplicaciones web o apis'
            tech='se espera desarrollar con .Net' />

          <Card imagenUrl='https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-08-02%20a%20la%28s%29%2013.20.50.png'
            titulo='Coming soon'
            descripcion='En desarrollo, aplicaciones web o apis'
            tech='se espera desarrollar con Java- Spring boot y Angular' />

        </div>{/*fin columnas y filas*/}
      </div>{/*fin parte 2*/}

    </section>
  )
}

export default Proyectos