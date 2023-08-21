import "./UserForm.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

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
  success,
  successMessage,
  ...props
}) {
  return (
    <section
      className={`user-form ${
        name === "profile" ? "user-form_type_profile" : ""
      }`}
    >
      {name !== "profile" && (
        <div className='user-form__logo'>
          <Logo />
        </div>
      )}
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
        {success && (
          <p
            className={`user-form__success-message ${
              name === "profile"
                ? "user-form__success-message_type_profile"
                : ""
            }`}
          >
            {successMessage}
          </p>
        )}

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
              className={`user-form__button hover hover_type_button ${
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
          <Link
            className='user-form__link hover hover_type_link'
            to={name === "register" ? "/signin" : "/signup"}
          >{`${name === "register" ? "Войти" : "Регистрация"}?`}</Link>
        </p>
      )}
      {name === "profile" && !unlocked && (
        <div className='user-form__profile-button-wrapper'>
          <button
            className='user-form__profile-button hover hover_type_link'
            onClick={onUnlock}
          >
            Редактировать
          </button>
          <button
            className='user-form__profile-button user-form__profile-button_type_red hover hover_type_link'
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
