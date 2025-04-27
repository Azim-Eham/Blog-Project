import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'AzimEham3426') {
      dispatch(login());
      navigate('/admin');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] text-center">
      <div className='w-96 p-6 bg-gray-200 shadow-md rounded-lg'>
      <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded bg-white"
        />
        </div>
        <div>
        <input
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded bg-white"
        />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 w-[200px] rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;