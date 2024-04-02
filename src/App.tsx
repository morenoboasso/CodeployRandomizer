import './App.css';
/* Routing */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
/* Pages */
import Home from './pages/home';
import TimerPage from './pages/timerPage';
import Settings from './pages/settings';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home"     element={<Home />} />
          <Route path="/timer"    element={<TimerPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*"         element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;