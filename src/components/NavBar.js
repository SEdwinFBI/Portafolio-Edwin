import React from 'react'
import style from '../App.module.css'

const NavBarr = () => {
  return (

    <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom " data-bs-theme="dark" >
      <div className="container">
        <a className="navbar-brand d-md-none" href="#hero">
          <h1>Edwin Baquiax</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ">
            <ul class="navbar-nav flex-grow-1 justify-content-between  text-center fs-5" data-bs-dismiss="offcanvas" >
              <li class="nav-item"> <h2>Edwin Baquiax</h2>
              </li>
              <li className="nav-item"><a className="nav-link" href="#hero">Inicio</a></li>

              <li className="nav-item"><a className="nav-link" href="#sobremi">Sobre mi</a></li>

              {/*<li className="nav-item"><a className="nav-link" href="#skills">Habilidades</a></li>*/}
              <li className="nav-item"><a className="nav-link" href="#works">Proyectos</a></li>
              {/*<li className="nav-item"><a className="nav-link" href="#contacto">Contactame</a></li>*/}
              <li class="nav-item disabled"><a class="nav-link disabled" href="#">Muy pronto</a></li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg " id={style.navBar}>
      <div className="container-fluid"  >
        <a className="navbar-brand" href="#hero">Navbar</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: " rgb(12, 147, 226)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" id={style.navDirA} href="#hero">Inicio</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" id={style.navDirA} href="#sobremi">Sobre mi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id={style.navDirA} href="#works">Proyectos</a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar