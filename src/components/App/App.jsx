import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  register,
  login,
  getUser,
  logout,
  updateMe,
  createMovie,
  getMovies,
  deleteMovie,
} from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { MOVIES_URL } from "../../utils/constants";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [logined, setLogined] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const headerLessRoutes = ["/signup", "/signin"];
  const footerLessRoutes = ["/signup", "/signin", "/profile"];
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [isFormBlocked, setIsFormBlocked] = useState(false);

  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleRegister = (name, email, password) => {
    setIsFormBlocked(true);
    register(name, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      })
      .finally(() => setIsFormBlocked(false));
  };

  const handleLogin = (email, password) => {
    setIsFormBlocked(true);
    login(email, password)
      .then((res) => {
        navigate("/movies", { replace: true });
        setLogined(true);
        setCurrentUser({ name: res.name, email });
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      })
      .finally(() => setIsFormBlocked(false));
  };

  const handleLogout = () => {
    logout().then((res) => {
      setLogined(false);
      navigate("/", { replace: true });
      localStorage.clear();
    });
  };

  const handleUserUpdate = (data, setUnlocked) => {
    setIsFormBlocked(true);
    updateMe(data)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setUnlocked(false);
        }
      })
      .catch((err) => setErrorMessage(err))
      .finally(() => setIsFormBlocked(false));
  };

  const handleSaveMovie = (movie) => {
    movie.img = MOVIES_URL + movie.image.url;
    movie.movieId = movie.id;
    createMovie(movie)
      .then((res) => {
        if (res) {
          setSavedMovies((prev) => [res.data, ...prev]);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id)
      .then((res) => {
        if (res) {
          setSavedMovies((prev) =>
            prev.filter((movie) => {
              return movie.movieId !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!logined)
      getUser()
        .then((res) => {
          if (res) {
            setLogined(true);
            setCurrentUser(res);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsUserChecked(true));
    if (logined) {
      getMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [logined]);

  return (
    <div className='app'>
      {!isUserChecked ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          {!headerLessRoutes.includes(location) && <Header logined={logined} />}
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Main />
                </>
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  logined={logined}
                  element={Movies}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                ></ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  logined={logined}
                  element={SavedMovies}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                ></ProtectedRoute>
              }
            />
            <Route
              path='/signup'
              element={
                <ProtectedRoute
                  logined={logined}
                  element={Register}
                  handleRegister={handleRegister}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  reversProtect={true}
                  isFormBlocked={isFormBlocked}
                ></ProtectedRoute>
              }
            />
            <Route
              path='/signin'
              element={
                <ProtectedRoute
                  logined={logined}
                  element={Login}
                  handleLogin={handleLogin}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  reversProtect={true}
                  isFormBlocked={isFormBlocked}
                ></ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  logined={logined}
                  element={Profile}
                  user={currentUser ? currentUser.name : ""}
                  handleLogout={handleLogout}
                  handleUserUpdate={handleUserUpdate}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  isFormBlocked={isFormBlocked}
                ></ProtectedRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {!footerLessRoutes.includes(location) && <Footer />}
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
