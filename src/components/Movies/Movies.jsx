import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useCallback, useEffect, useState } from "react";
import * as movieApi from "../../utils/MovieApi";
import { filterMoviesByName, filterMoviesByTime } from "../../utils/utils";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [limitedMovies, setIsLimitedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isLimited, setIsLimited] = useState(
    JSON.parse(localStorage.getItem("isLimited")) || false
  );
  const [isError, setIsError] = useState(false);

  async function getAllMovies() {
    try {
      setIsLoading(true);
      if (!movies.length) {
        const data = await movieApi.getMovies();
        if (data) {
          setIsError(false);
          setMovies(data);
          localStorage.setItem("movies", JSON.stringify(data));
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsError(true);
    }
  }

  const handleSearch = (query) => {
    setQuery(query);
    localStorage.setItem("query", JSON.stringify(query));
    getAllMovies();
    console.log(query);
    handleFilter(query);
    if (isLimited) handleLimit();
  };

  const handleFilter = (query) => {
    setFilteredMovies(filterMoviesByName(movies, query));
  };

  const handleLimitToggle = () => {
    setIsLimited((prev) => !prev);
  };

  const handleLimit = useCallback(() => {
    setIsLimitedMovies(filterMoviesByTime(filteredMovies));
  }, [filteredMovies]);

  useEffect(() => {
    localStorage.setItem("isLimited", JSON.stringify(isLimited));
    if (isLimited) handleLimit();
  }, [isLimited, handleLimit]);

  useEffect(() => {
    const query = JSON.parse(localStorage.getItem("query"));
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (query) setQuery(query);
    if (movies) setMovies(movies);
  }, []);

  useEffect(() => {
    if (movies.length) {
      if (isLimited)
        setFilteredMovies(
          filterMoviesByTime(filterMoviesByName(movies, query))
        );
      else {
        setFilteredMovies(filterMoviesByName(movies, query));
      }
    }
  }, [movies, query, isLimited]);

  return (
    <main className='movies'>
      <SearchForm
        handleSearch={handleSearch}
        query={query}
        handleLimitToggle={handleLimitToggle}
        isLimited={isLimited}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={isLimited ? limitedMovies : filteredMovies}
          isError={isError}
          query={query}
        />
      )}
    </main>
  );
}

export default Movies;
