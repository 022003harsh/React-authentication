import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import OpenRoute from './components/common/Auth/OpenRoute';
import Login from './components/common/Auth/Login';
import Signup from './components/common/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
