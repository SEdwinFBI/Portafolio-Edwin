
import style from '../App.module.css'
import logo from "../assets/Logo/Logo_circle.png"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg " id={style.navBar}>
      <div className="container-fluid"  >
        <a className="navbar-brand" href="#hero"><img src={logo} alt="" style={{width:"50px"}}/></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: " rgb(12, 147, 226)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
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
              <a className="nav-link" id={style.navDirA} href="#skills">Habilidades</a>
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
