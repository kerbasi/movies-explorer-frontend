import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <section className='movies-card-list'>
      {movies.map((movie) => {
        return <MoviesCard movie={movie} />;
      })}
      <button className='movies-card-list__more-button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
