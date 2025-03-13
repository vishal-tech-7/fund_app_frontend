import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './pages/LoginPages';
import RegisterPage from './pages/RegisterPage';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  const { authToken } = useAuth(); // Access authToken from AuthContext

  return (
    <Router>
      <div className="flex flex-col">
        <div className="flex-1">
          <Routes>
            {/* 🔒 Protected Dashboard Route */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* 🔑 Public Routes (Redirect to Dashboard if already logged in) */}
            <Route
              path="/login"
              element={authToken ? <Navigate to="/dashboard" replace /> : <LoginPage />}
            />
            <Route
              path="/register"
              element={authToken ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
            />

            {/* Redirect to dashboard if logged in, else to login */}
            <Route path="/" element={<Navigate to={authToken ? "/dashboard" : "/login"} replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
