import { movies } from "../../data.js";
import ActorCard from "../../components/ActorCard/ActorCard"

export default function ActorListPage() {
  return (
    <div>
      <h1>Actors List</h1>
  {Array.from(mapActorsFromMovies()).map(function(actor){
    return <ActorCard actor={actor} />
  }) }
  </div>
  );
}

function mapActorsFromMovies() {
  const actors = movies.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue.cast], []
    );
    return new Set(actors)
}
