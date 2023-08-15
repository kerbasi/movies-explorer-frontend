import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  const backHandler = () => {
    navigation(-1);
  };
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button
        className='not-found__button hover hover_type_link'
        onClick={backHandler}
      >
        Назад
      </button>
    </main>
  );
}

export default NotFound;
