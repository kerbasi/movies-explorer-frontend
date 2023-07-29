import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies showPreloader={false} />} />
        <Route
          path='/saved-movies'
          element={<SavedMovies showPreloader={false} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
