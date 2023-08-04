import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import find from "../../images/find.svg";

function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <div className='search-from__text-input-wrapper'>
          <input
            className='search-form__text-input'
            type='text'
            placeholder='Фильм'
          />
          <button
            className='search-form__submit-button hover-button'
            type='submit'
          >
            <img className='search-form__find-img' src={find} alt='find' />
          </button>
        </div>
        <div className='search-form__filter-checkbox'>
          <FilterCheckbox label='Короткометражки' />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
