
import Style from "../App.module.css";
//import ImgSobreMi from "../img/1995515.png";


const SobreMi = () => {
  const imgGitHub: string = "https://avatars.githubusercontent.com/u/104693627?v=4";
  return (
    <section id="sobremi" className={Style.section_about}>
      <h2 className={Style.texto_about}>
        Sobre <span>mi</span>
      </h2>
      <div className={Style.img_about}>
        <div >
          <img className={Style.img} src={imgGitHub} alt="github avatar" />
        </div>
        <span className={Style.circulo}></span>
      </div>
      <div className={Style.info_about}>
        <h3>Desarrollador de Software</h3>
        <p className="container">
          {" "}
          Soy Edwin Baquiax, estudiante de Ingeniería en Sistemas y Ciencias de la Computación con una experiencia práctica en el desarrollo de soluciones empresariales de extremo a extremo.
          <br />
          <br />
          Desde joven me apasiona la tecnología, tengo pasión en el aprendizaje autodidacta y el desarrollo de proyectos.
          <br /><br />
          Actualmente participo activamente en el diseño, desarrollo, despliegue y mejora de sistemas, tanto modernos como legados, aplicando buenas prácticas como Clean Code y principios SOLID. He trabajado en proyectos que abarcan desde aplicaciones monolíticas hasta arquitecturas distribuidas, implementando soluciones eficientes, seguras y orientadas al usuario.


        </p>
      </div>
    </section>
  );
};

export default SobreMi;
