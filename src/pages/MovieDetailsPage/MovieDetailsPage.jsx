import { useParams } from 'react-router-dom';


export default function MovieDetailsPage() {
  console.log()
  const { movieName } = useParams();


    return (
      <>
    <h1>Movie Details Page</h1>
      <p>{movieName}</p>
  

      </>
    )
  }
  