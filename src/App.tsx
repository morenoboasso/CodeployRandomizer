import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import TimerPage from './pages/timerPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;