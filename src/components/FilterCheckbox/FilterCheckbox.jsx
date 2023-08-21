import "./FilterCheckbox.css";

function FilterCheckbox({ label, handleLimitToggle, isLimited }) {
  const handleChange = () => {
    handleLimitToggle();
  };

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__checkbox'
          type='checkbox'
          onChange={handleChange}
          checked={isLimited}
        />
        <span className='filter-checkbox__span'></span>
        {label}
      </label>
    </div>
  );
}

export default FilterCheckbox;
