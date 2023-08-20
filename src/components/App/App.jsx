import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  register,
  login,
  getUser,
  logout,
  updateMe,
  createMovie,
  getMovies,
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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [logined, setLogined] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

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
        navigate("/movies", { replace: true });
        setLogined(true);
        setCurrentUser();
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

  const handleUserUpdate = (data, setUnlocked) => {
    updateMe(data)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setUnlocked(false);
        }
      })
      .catch((err) => setErrorMessage(err));
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

  useEffect(() => {
    getUser()
      .then((res) => {
        if (res) {
          setLogined(true);
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getMovies().then((res) => {
      setSavedMovies(res);
    });
  }, [logined]);

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
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
                <Movies
                  showPreloader={false}
                  handleSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                />{" "}
                <Footer />
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
                <Profile
                  user={currentUser ? currentUser.name : ""}
                  handleLogout={handleLogout}
                  handleUserUpdate={handleUserUpdate}
                  errorMessage={errorMessage}
                />
              </>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
