
import estilos from "../App.module.css";








interface Props {
    id: number;
  imagenUrl: string;
  title: string;

}

const Skill: React.FC<Props> = ({
  id,
  imagenUrl,
  title,
}) => {
  return (
    <div className="col   " id={id.toString()} style={{marginBottom:"1rem",textAlign:"center"}}>
      <div className="card" id={estilos.carta} style={{width:"10rem",height:"10rem",borderRadius:"20px",backgroundColor:"white",textAlign:"center"}}>
        <img src={imagenUrl} className="card-img-top" alt={title}style={{width:"10rem",height:"10rem",borderRadius:"20px",backgroundColor:"white"}}/>
       
          </div>
          <h6 className="card-title">{title}</h6>
    </div>
  );
};

export default Skill;
