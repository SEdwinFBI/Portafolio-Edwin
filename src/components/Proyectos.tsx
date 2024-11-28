
import estilos from "../App.module.css";
import { proyectos } from "../utils/proyectos";
import Card from "./Card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Proyectos = () => {
  return (
    <section className={estilos.section_proyectos} id="works">
      
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1 className="text-center">Portafolio de proyectos </h1>
        <DotLottieReact
                src="https://lottie.host/79871f47-02e6-426a-8311-d34329f39427/F2g4MV0t5w.lottie"
                loop
                autoplay
                style={{position:"relative",width:"350px"}}
              />
      </div>
      <hr />
      <hr />
      {proyectos.map((item) => (
        <div key={item.id} style={{marginTop:"5rem"}}>
          {/*inicio parte 1*/}
          <h2 className="text-center">{item.title}</h2>
          <hr />
          <div className="row row-cols-1 row-cols-sm-3 " style={{display:"flex"}}>
            {/*inicio columnas y filas*/}
            {item.proyectosDesarrollados.map((item) => (
              <article key={item.id}>
                {/*div */}
                <Card
                id={item.id}
                  imagenUrl={item.imagenUrl}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  href={item.href}
                  tech={item.tech}
                  api={item.api}
                  responsive={item.responsive}
                />
              </article>
            ))}

            
            {/*div */}
          </div>
          {/*fin columnas y filas*/}
        </div>
      ))}
       
    </section>
  );
};

export default Proyectos;
