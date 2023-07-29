import "./Login.css";
import UserForm from "../UserForm/UserForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { useEffect } from "react";

function Login() {
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setValues({
      email: "pochta@yandex.ru",
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
      >
        <label className='user-form__label' htmlFor='email'>
          E-mail
          <input
            className={`user-form__input ${
              errors.email ? "user-form__input-error" : ""
            }`}
            type='email'
            name='email'
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

export default Login;
