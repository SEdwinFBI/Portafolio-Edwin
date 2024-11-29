
import estilos from "../App.module.css";
import { skills } from "../utils/proyectos";
import Skill from "./cardSkills";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Proyectos = () => {
  return (
    <section className={estilos.section_proyectos} id="skills">
      
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1 className="text-center">Habilidades</h1>
        <DotLottieReact
                src="https://lottie.host/79871f47-02e6-426a-8311-d34329f39427/F2g4MV0t5w.lottie"
                loop
                autoplay
                style={{position:"relative",width:"350px"}}
              />
      </div>
      <hr />
      <hr />
      {skills.map((item) => (
        <div key={item.id} >
          {/*inicio parte 1*/}
          <h2 className="text-center">{item.title}</h2>
          <hr />
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 " style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            {/*inicio columnas y filas*/}
            {item.skill.map((item) => (
              <article key={item.id}>
                {/*div */}
                <Skill
                  id={item.id}
                  imagenUrl={item.imagenUrl}
                  title={item.title}
                
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
