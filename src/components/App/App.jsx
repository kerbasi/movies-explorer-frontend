import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
