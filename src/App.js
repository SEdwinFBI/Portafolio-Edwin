import NavBar from "./components/NavBar";
import Contactarme from "./components/Contactarme";
import Inicio from "./components/Inicio";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Style from './App.module.css';



function App() {


  return (
    <body className={Style}>
      <NavBar  /> {/* Menus*/}
      {/*//se uso container porque estamos usando bootrap, entonces lo que hace es indicar que es el contenedor de todo*/}
      <div className=""> {/* cuerpo */}
        <Inicio />
        <SobreMi />
        <Habilidades /> {/** */}
        <Proyectos />
  <Contactarme />
      </div> {/*fin Cuerpo*/}
    </body>

  );
}

export default App;
