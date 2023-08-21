import "./Register.css";
import UserForm from "../UserForm/UserForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { useEffect } from "react";
import { REGEXP_EMAIL, REGEXP_NAME } from "../../utils/constants";

function Register({
  handleRegister,
  errorMessage,
  setErrorMessage,
  isFormBlocked,
}) {
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };
  useEffect(() => {
    setValues({
      name: "",
      email: "",
      password: "",
    });
  }, [setValues]);
  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);
  return (
    <main className='register'>
      <UserForm
        title='Добро пожаловать!'
        name='register'
        onSubmit={onSubmit}
        buttonText='Зарегистрироваться'
        isValid={isValid}
        errorMessage={errorMessage}
        isFormBlocked={isFormBlocked}
      >
        <label className='user-form__label' htmlFor='name'>
          Имя
          <input
            className={`user-form__input ${
              errors.name ? "user-form__input-error" : ""
            }`}
            type='text'
            name='name'
            placeholder='Ваше имя'
            id='name'
            form='register'
            required
            pattern={REGEXP_NAME}
            minLength={2}
            maxLength={30}
            onChange={handleChange}
            value={values.name || ""}
          />
          <span className='user-form__error'>{errors.name || ""}</span>
        </label>
        <label className='user-form__label' htmlFor='email'>
          E-mail
          <input
            className={`user-form__input ${
              errors.email ? "user-form__input-error" : ""
            }`}
            type='email'
            name='email'
            placeholder='example@yandex.ru'
            id='email'
            form='register'
            required
            pattern={REGEXP_EMAIL}
            onChange={handleChange}
            value={values.email || ""}
          />
          <span className='user-form__error'>{errors.email || ""}</span>
        </label>
        <label className='user-form__label' htmlFor='password'>
          Пароль
          <input
            className={`user-form__input ${
              errors.password ? "user-form__input-error" : ""
            }`}
            type='password'
            name='password'
            placeholder='Ваш пароль'
            id='password'
            form='register'
            required
            pattern='.{8,}'
            title='Пароль должен быть не меньше 8 символов'
            onChange={handleChange}
            value={values.password || ""}
          />
          <span className='user-form__error'>{errors.password || ""}</span>
        </label>
      </UserForm>
    </main>
  );
}

export default Register;
