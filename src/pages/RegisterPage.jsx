import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); 
    
    if (!username || !email || !password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://fund-app-backend-2r8l.onrender.com/api/auth/register', {
        username,
        email,
        password,
      });

     
      localStorage.setItem('token', response.data.token);
      alert('Registration successful!');
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Registration Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Error registering user');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-700">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
              minLength="6"
            />
            <Button 
              type="submit" 
              className={`w-full mt-4 text-white ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`} 
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-600 hover:text-blue-800"
            >
              Login
            </button>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
