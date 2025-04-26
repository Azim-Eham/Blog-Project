import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Example credentials: username = "admin", password = "password"
    if (username === 'admin' && password === 'a9d2#Fjsl13!') {
      // Save login status in localStorage
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin'); // Redirect to Admin Dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
