import "./UserForm.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserForm({
  title,
  name,
  onSubmit,
  buttonText,
  isValid,
  onUnlock,
  unlocked,
  errorMessage,
  onLogout,
  ...props
}) {
  return (
    <section
      className={`user-form ${
        name === "profile" ? "user-form_type_profile" : ""
      }`}
    >
      {name !== "profile" && <Logo />}
      <h1
        className={`user-form__title ${
          name === "profile" ? "user-form__title_type_profile" : ""
        }`}
      >
        {title}
      </h1>
      <form
        className={`user-form__form user-form__form_type_${name}`}
        action='#'
        name={name}
        id={name}
        noValidate
        onSubmit={onSubmit}
      >
        {props.children}
        {(name !== "profile" || unlocked) && (
          <div
            className={`user-form__button-wrapper ${
              name === "login" ? "user-form__button-wrapper_type_login" : ""
            } ${
              name === "profile" ? "user-form__button-wrapper_type_profile" : ""
            }`}
          >
            <p
              className={`user-form__error-message ${
                name === "profile"
                  ? "user-form__error-message_type_profile"
                  : ""
              }`}
            >
              {errorMessage}
            </p>
            <button
              className={`user-form__button ${
                !isValid ? "user-form__button_disabled" : ""
              }`}
              type='submit'
              from={name}
              disabled={isValid ? false : true}
            >
              {buttonText}
            </button>
          </div>
        )}
      </form>
      {(name === "register" || name === "login") && (
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
      )}
      {name === "profile" && !unlocked && (
        <div className='user-form__profile-button-wrapper'>
          <button className='user-form__profile-button' onClick={onUnlock}>
            Редактировать
          </button>
          <button
            className='user-form__profile-button user-form__profile-button_type_red'
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      )}
    </section>
  );
}

export default UserForm;
