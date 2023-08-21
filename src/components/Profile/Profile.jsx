import "./Profile.css";
import UserForm from "../UserForm/UserForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { REGEXP_NAME } from "../../utils/constants";

function Profile({ user, handleLogout, handleUserUpdate, errorMessage }) {
  const [success, setSuccess] = useState(false);
  const [successMessage] = useState("Профиль успешно изменен");
  const [unlocked, setUnlocked] = useState(false);
  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const [oldValues, setOldValues] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate({ name: values.name, email: values.email }, setUnlocked);
    setSuccess(true);
  };
  const onUnlock = () => {
    setUnlocked(true);
    setSuccess(false);
    setOldValues(values);
    console.log(values);
  };
  const onLogout = () => {
    navigate("/");
    handleLogout();
  };
  useEffect(() => {
    const { name, email } = currentUser;
    setValues({
      name: name,
      email: email,
    });
  }, [setValues, currentUser]);

  useEffect(() => {
    if (values.name === oldValues.name && values.email === oldValues.email) {
      setIsValid(false);
    }
  }, [values, oldValues, setIsValid]);

  return (
    <main className='profile'>
      <UserForm
        title={`Привет, ${user}!`}
        name='profile'
        onSubmit={onSubmit}
        onUnlock={onUnlock}
        buttonText='Сохранить'
        isValid={isValid}
        unlocked={unlocked}
        errorMessage={errorMessage}
        onLogout={onLogout}
        success={success}
        successMessage={successMessage}
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
            pattern={REGEXP_NAME}
            minLength={2}
            maxLength={30}
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
