
import estilos from "../App.module.css";
interface Props {

  imagenUrl: string;
  titulo: string;
  descripcion: string;
  tech: string;
  href: string;
}

const Card: React.FC<Props> = ({
  imagenUrl,
  titulo,
  descripcion,
  tech,
  href,
}) => {
  return (
    <div className="col mb-3  ">
      <div className="card" id={estilos.carta}>
        <img src={imagenUrl} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <h5 className="card-title">Tecnologias utilizadas </h5>
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
