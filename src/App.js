import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
