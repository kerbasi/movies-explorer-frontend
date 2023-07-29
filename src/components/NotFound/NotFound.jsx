import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link' to={navigation(-1)}>
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
