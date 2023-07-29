import "./UserForm.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function UserForm({ title, name, onSubmit, buttonText, isValid, ...props }) {
  return (
    <section className='user-form'>
      <Logo />
      <h1 className='user-form__title'>{title}</h1>
      <form
        className={`user-form__form user-form__form_type_${name}`}
        action='#'
        name={name}
        id={name}
        noValidate
        onSubmit={onSubmit}
      >
        {props.children}
        <button
          className={`user-form__button ${
            !isValid ? "user-form__button_disabled" : ""
          } ${name === "login" ? "user-form__button_type_login" : ""}`}
          type='submit'
          from={name}
          disabled={isValid ? false : true}
        >
          {buttonText}
        </button>
      </form>
      <p className='user-form__text'>
        {`${
          name === "register"
            ? "Уже зарегистрированы"
            : "Ещё не зарегистрированы"
        }? `}
        <Link className='user-form__link'>{`${
          name === "register" ? "Войти" : "Регистрация"
        }?`}</Link>
      </p>
    </section>
  );
}

export default UserForm;
