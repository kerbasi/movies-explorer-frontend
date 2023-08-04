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
import useWindowDimensions from "../../hooks/useWindowDimensions";

function App() {
  const [logined, setLogined] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header logined={logined} setLogined={setLogined} width={width} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header logined={logined} width={width} />
              <Movies showPreloader={false} width={width} /> <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header logined={logined} width={width} />
              <SavedMovies showPreloader={false} width={width} />
              <Footer />
            </>
          }
        />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route
          path='/profile'
          element={
            <>
              <Header logined={logined} width={width} />
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
