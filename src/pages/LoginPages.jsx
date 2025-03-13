import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fund-app-backend-2r8l.onrender.com/api/auth/login', { email, password });

      const token = response.data.token; 

      localStorage.setItem('authToken', token); 

      
      login(token);

      alert('Login successful! Redirecting to the dashboard...');
      
      
      navigate('/'); 

    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-700">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-blue-600 hover:text-blue-800"
            >
              Register
            </button>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
