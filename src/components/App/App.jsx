import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

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
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login setLogined={setLogined} />} />
        <Route
          path='/profile'
          element={
            <>
              <Header logined={logined} />
              <Profile user='Виталий' setLogined={setLogined} />
            </>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
