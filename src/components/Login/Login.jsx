import "./Login.css";
import UserForm from "../UserForm/UserForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLogined }) {
  const navigate = useNavigate();
  const [errorMessage] = useState("");
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    setLogined(true);
  };
  useEffect(() => {
    setValues({
      email: "",
      password: "",
    });
  }, [setValues]);
  return (
    <main className='login'>
      <UserForm
        title='Рады видеть!'
        name='login'
        onSubmit={onSubmit}
        buttonText='Войти'
        isValid={isValid}
        errorMessage={errorMessage}
      >
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
            form='login'
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
            form='login'
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

export default Login;
