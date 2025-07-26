import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Router, Routes,BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Navigate to={'/home'} />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
