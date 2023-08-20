import { useEffect, useState } from "react";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import find from "../../images/find.svg";

function SearchForm({
  handleSearch,
  query,
  handleLimitToggle,
  isLimited,
  useMemory,
}) {
  const [inputText, setInputText] = useState(query);
  const [errorText, setErrorText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText(inputText || !useMemory ? "" : "Нужно ввести ключевое слово");
    if (inputText || !useMemory) {
      handleSearch(inputText);
    }
  };
  useEffect(() => {
    setInputText(query);
  }, [query]);
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <div className='search-from__text-input-wrapper'>
          <input
            className='search-form__text-input'
            type='text'
            placeholder='Фильм'
            onChange={(e) => setInputText(e.target.value)}
            value={inputText || ""}
          />
          <button
            className='search-form__submit-button hover hover_type_button'
            type='submit'
            onClick={handleSubmit}
          >
            <img className='search-form__find-img' src={find} alt='find' />
          </button>
        </div>
        <div className='search-form__error'>{errorText}</div>
        <div className='search-form__filter-checkbox'>
          <FilterCheckbox
            label='Короткометражки'
            handleLimitToggle={handleLimitToggle}
            isLimited={isLimited}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
