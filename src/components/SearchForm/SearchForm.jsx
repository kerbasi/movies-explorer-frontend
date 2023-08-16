import { useState } from "react";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import find from "../../images/find.svg";

function SearchForm() {
  const [inputText, setInputText] = useState("");
  const [errorText, setErrorText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText(inputText ? "" : "Нужно ввести ключевое слово");
  };
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
          <FilterCheckbox label='Короткометражки' />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
