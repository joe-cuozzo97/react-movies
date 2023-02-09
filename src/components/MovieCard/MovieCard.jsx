import { Link } from "react-router-dom";

export default function MovieCard(props) {
    const URL = "movies/" + props.title;
    console.log(props.posterPath)
    return (
      <div className="movieCard" >
        <img src={props.posterPath} alt="" />
         <p><Link to={URL}>{props.title}</Link></p>
        <p>{props.releaseDate}</p>
      </div>
    );
  }