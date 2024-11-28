
import estilos from "../App.module.css";
import { proyecto } from "../utils/proyectos";
import ApiIcon from "./icons/ApiIcon";
import PcIcon from "./icons/PcIcon";
import Phone from "./icons/Phone";






interface Props extends proyecto{
  imagenUrl: string;
  titulo: string;
  descripcion: string;
  tech: string;
  href: string;
  api?:boolean;
  responsive?:boolean;
}

const Card: React.FC<Props> = ({
  id,
  imagenUrl,
  titulo,
  descripcion,
  tech,
  href,
  api = false,
  responsive = false,
}) => {
  return (
    <div className="col mb-3  " id={id.toString()}>
      <div className="card" id={estilos.carta}>
        <img src={imagenUrl} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <h5 className="card-title">Tecnologias utilizadas {
            api ? <ApiIcon/> : (responsive ? <><Phone/> <PcIcon/> </> : <PcIcon/>) } </h5>
          <p className="card-text">{tech}</p>
          <a
            href={href}
            className="btn btn-primary"
            id={estilos.butt}
            target="blank"
          >
            Ir al proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
