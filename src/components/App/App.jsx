import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { register, login, getUser, logout } from "../../utils/MainApi";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  const [logined, setLogined] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      });
  };

  const handleLogin = (email, password) => {
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/movies", { replace: true });
        setLogined(true);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      });
  };

  const handleLogout = () => {
    logout().then((res) => {
      setLogined(false);
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    getUser()
      .then((res) => {
        if (res) {
          setLogined(true);
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header logined={logined} setLogined={setLogined} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header logined={logined} />
              <Movies showPreloader={false} /> <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header logined={logined} />
              <SavedMovies showPreloader={false} />
              <Footer />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <Register
              handleRegister={handleRegister}
              errorMessage={errorMessage}
            />
          }
        />
        <Route
          path='/signin'
          element={
            <Login handleLogin={handleLogin} errorMessage={errorMessage} />
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header logined={logined} />
              <Profile user='Виталий' handleLogout={handleLogout} />
            </>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
