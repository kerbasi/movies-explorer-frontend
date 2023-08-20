import "./SavedMovies.css";
import { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMoviesByName, filterMoviesByTime } from "../../utils/utils";

function SavedMovies({ handleSaveMovie, savedMovies, handleDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [limitedMovies, setIsLimitedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLimited, setIsLimited] = useState(false);

  const handleSearch = (query) => {
    setQuery(query);
    handleFilter(query);
    if (isLimited) handleLimit();
  };

  const handleFilter = (query) => {
    setFilteredMovies(filterMoviesByName(savedMovies, query));
  };

  const handleLimitToggle = () => {
    setIsLimited((prev) => !prev);
  };

  const handleLimit = useCallback(() => {
    setIsLimitedMovies(filterMoviesByTime(filteredMovies));
  }, [filteredMovies]);

  useEffect(() => {
    if (savedMovies.length) setFilteredMovies([...savedMovies]);
  }, [savedMovies]);
  return (
    <main className='saved-movies'>
      <SearchForm
        handleSearch={handleSearch}
        query={query}
        handleLimitToggle={handleLimitToggle}
        isLimited={isLimited}
      />

      <MoviesCardList
        movies={isLimited ? limitedMovies : filteredMovies}
        isError={false}
        query={""}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMovies={savedMovies}
        useMemory={false}
      />
    </main>
  );
}

export default SavedMovies;
