import { useParams } from 'react-router-dom';
import { movies } from "../../data.js";



export default function MovieDetailsPage() {
  const { movieName} = useParams();
  const movie = movies.find(m => m.title === movieName);



    return (
      <>
    <h1>Movie Details Page</h1>
      <p>{movie.title}</p>
      <p>{movie.releaseDate}</p>
      <p>{movie.cast.join()}</p>
      <p><img src={movie.posterPath} alt="" /></p>
      </>
    )
  }
  