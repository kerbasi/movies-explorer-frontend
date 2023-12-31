import "./Register.css";
import UserForm from "../UserForm/UserForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { useEffect, useState } from "react";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("500 На сервере произошла ошибка");
  };
  useEffect(() => {
    setValues({
      name: "",
      email: "",
      password: "",
    });
  }, [setValues]);
  return (
    <main className='register'>
      <UserForm
        title='Добро пожаловать!'
        name='register'
        onSubmit={onSubmit}
        buttonText='Зарегистрироваться'
        isValid={isValid}
        errorMessage={errorMessage}
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
            minLength='2'
            maxLength='30'
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
            minLength='8'
            maxLength='30'
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
