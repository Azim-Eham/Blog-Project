import React, { useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../redux/authSlice'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {


    const [darkMode, setDarkMode] = useDarkMode()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
      dispatch(logout());
      navigate('/');
      setIsMenuOpen(false);
    }

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className='bg-black text-white shadow-md px-6 py-4 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='text-sm md:text-lg font-bold'>
          <Link to='/' onClick={() => setIsMenuOpen(false)}>📰 MyBlog</Link>
        </div>
        
        <div>
          <ul className='hidden md:flex space-x-4 justify-center items-center'>
            <li><NavLink to='/' className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500 font' : ''}`}>Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>About</NavLink></li>
            <li><NavLink to='/admin' className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>Dashboard</NavLink></li>
            {isAuthenticated ? (
              <li><NavLink onClick={handleLogout} className='hover:text-red-500 font-medium'>Logout</NavLink></li>
            ) : (
              <li><NavLink to='/login' className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>Login</NavLink></li>
            )}
          </ul>
        </div>

        

        <div className='flex items-center justify-center space-x-4'>
          <button onClick={toggleMenu} className='md:hidden focus:outline-none'>
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-[50%] bg-gray-400 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <NavLink to='/' onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>About</NavLink>
          {isAuthenticated && (
            <NavLink to="/admin" onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>Dashboard</NavLink>
          )}
          {!isAuthenticated ? (
            <NavLink to="/login" onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 font-medium ${isActive ? 'text-blue-500' : ''}`}>Login</NavLink>
          ) : (
            <NavLink onClick={handleLogout} className={`hover:text-blue-400 font-medium `}>Logout</NavLink>
          )}
        </div>
      )}
      
    </nav>
  )
}

export default Navbar