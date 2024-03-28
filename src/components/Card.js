import React from 'react'
import estilos from '../App.module.css';
interface Props {
    // variables
    imagenUrl: string;
    titulo: string;
    descripcion: string;
    tech: string;
    href: String;

  }

const Card = (Props) => {

  return (
    <div className='col mb-3 '>
    <div className="card" id={estilos.carta}>
      <img src={Props.imagenUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{Props.titulo}</h5>
          <p className="card-text">{Props.descripcion}</p>
          <h5 className="card-title">Tecnologias utilizadas</h5>
          <p className="card-text">{Props.tech}</p>
          <a href={Props.href} className="btn btn-primary" id={estilos.butt} target='blank'>Ir al proyecto</a>
        </div>
    </div>
  </div>
  )
}

export default Card