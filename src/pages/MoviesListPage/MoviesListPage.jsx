import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import { movies } from "../../data.js";

export default function MoviesListPage() {
 const renderCards = () => {
  console.log('yerrrr')
  const cards = movies.map((card) => {
    return (
      <MovieCard {...card} />
    )
  })
  console.log(cards)
  return cards;
 }

  return (
    <>
      <h1>Movies List Page</h1>
    <div>
      {renderCards()};
    </div>
    </>
  );
}
