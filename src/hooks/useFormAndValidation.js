import { useState, useCallback } from "react";
import isEmail from "validator/lib/isEmail";

function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Имя должно быть от 2 до 30 символов и состоять из кирилицы или латиницы, дефиса и пробела')
    } else if (name === 'password' && e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Пароль должен быть не меньше 8 символов')
    } else if (name === 'email' && !isEmail(value)) {
      e.target.setCustomValidity('Нужно ввести дествительный адресс email')
    } else {
      e.target.setCustomValidity('')
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}

export default useFormAndValidation