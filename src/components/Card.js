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
const Pc = () =>{
  if (this.props.cel == "si") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
    )
  }
 
}

const Card = (Props) => {

  return (
    <div className='col mb-3  '>
      <div className="card" id={estilos.carta}>
        <img src={Props.imagenUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Props.titulo}</h5>
          <p className="card-text">{Props.descripcion}</p>
          <h5 className="card-title">Tecnologias utilizadas </h5> 
          <p className="card-text">{Props.tech}</p> 
          <a href={Props.href} className="btn btn-primary" id={estilos.butt} target='blank'>Ir al proyecto</a>
        </div>
      </div>
    </div>
  )
}

export default Card