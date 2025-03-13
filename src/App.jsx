import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './pages/LoginPages';
import RegisterPage from './pages/RegisterPage';
import { useAuth } from './context/AuthContext';

function App() {
  const { authToken } = useAuth(); // Access authToken from AuthContext

  return (
    <Router>
      <div className="flex flex-col">
        <div className="flex-1">
          <Routes>
            {/* If logged in, show Dashboard; else redirect to Login */}
            <Route
              path="/"
              element={authToken ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* If not logged in, show Login; else redirect to Dashboard */}
            <Route
              path="/login"
              element={authToken ? <Navigate to="/" /> : <LoginPage />}
            />

            {/* If not logged in, show Register; else redirect to Dashboard */}
            <Route
              path="/register"
              element={authToken ? <Navigate to="/" /> : <RegisterPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
