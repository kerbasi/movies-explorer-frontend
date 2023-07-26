import "./FilterCheckbox.css";

function FilterCheckbox({ label }) {
  return (
    <div className='filter-checkbox'>
      <label class='filter-checkbox__label'>
        <input className='filter-checkbox__checkbox' type='checkbox' />
        <span className='filter-checkbox__span'></span>
        {label}
      </label>
    </div>
  );
}

export default FilterCheckbox;
