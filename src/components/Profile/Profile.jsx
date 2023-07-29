import "./Profile.css";
import UserForm from "../UserForm/UserForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { useEffect, useState } from "react";

function Profile({ user }) {
  const [unlocked, setUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("500 На сервере произошла ошибка");
  };
  const onUnlock = () => {
    setUnlocked(true);
  };
  useEffect(() => {
    setValues({
      name: "Виталий",
      email: "pochta@yandex.ru",
    });
  }, [setValues]);
  return (
    <main className='register'>
      <UserForm
        title={`Привет, ${user}!`}
        name='profile'
        onSubmit={onSubmit}
        onUnlock={onUnlock}
        buttonText='Сохранить'
        isValid={isValid}
        unlocked={unlocked}
        errorMessage={errorMessage}
      >
        <label
          className='user-form__label user-form__label_type_profile'
          htmlFor='name'
        >
          Имя
          <input
            className={`user-form__input user-form__input_type_profile ${
              errors.name ? "user-form__input-error" : ""
            }`}
            type='text'
            name='name'
            id='name'
            form='profile'
            required
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.name || ""}
            disabled={!unlocked}
          />
          <span className='user-form__error user-form__error_type_profile'>
            {errors.name || ""}
          </span>
        </label>
        <label
          className='user-form__label user-form__label_type_profile'
          htmlFor='email'
        >
          E-mail
          <input
            className={`user-form__input user-form__input_type_profile ${
              errors.email ? "user-form__input-error" : ""
            }`}
            type='email'
            name='email'
            id='email'
            form='profile'
            required
            onChange={handleChange}
            value={values.email || ""}
            disabled={!unlocked}
          />
          <span className='user-form__error user-form__error_type_profile'>
            {errors.email || ""}
          </span>
        </label>
      </UserForm>
    </main>
  );
}

export default Profile;
