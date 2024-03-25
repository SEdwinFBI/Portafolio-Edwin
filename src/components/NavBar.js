import React from 'react'


const NavBar = () => {
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

export default NavBar