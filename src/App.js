import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Router, Routes,BrowserRouter } from "react-router-dom";
import EventName from './pages/Event-Name/EventName';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Navigate to={'/event_name'} />} />
          <Route exact path="/event_name" element={<EventName />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
