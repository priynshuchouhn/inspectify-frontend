import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    setError('');

    try {
      // Replace '/api/login' with your actual login API endpoint
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        username,
        password,
      });     

      // Save token to localStorage
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      // Redirect to home page after successful login
      navigate('/home');
    } catch (err: any) {
      console.log(err);
      // Handle error (e.g., show error message from API)
      setError(
        err.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };


  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Login</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" id="login-error">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} id="login-form">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
              placeholder="admin@inspectify.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              data-testid="username-input"
            />
            <p className="text-xs text-gray-500 mt-1">Hint: admin@inspectify.com</p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="admin@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password-input"
            />
            <p className="text-xs text-gray-500 mt-1">Hint: admin@123</p>
          </div>
          
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              data-testid="remember-checkbox"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              id="login-button"
              className="btn btn-primary w-full"
              data-testid="login-button"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;