import React, { useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../redux/authSlice'

const Navbar = () => {

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
    <nav className='bg-black text-white shadow-md px-1 md:px-6 py-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='text-sm md:text-lg font-bold'>
          <Link to='/' onClick={() => setIsMenuOpen(false)}>📰 MyBlog</Link>
        </div>
        <div>
          <input type="search" placeholder="Search..." className="px-2 py-1 rounded text-sm bg-gray-700 w-[150px] md:w-[250px] focus:outline-none" />
          <button
            className='bg-blue-500 text-sm md:text-md px-2 py-1 mx-2 rounded hover:bg-blue-600 active:bg-blue-700 cursor-pointer'>
            Search
          </button>
        </div>
        <div>
          <ul className='hidden md:flex space-x-4'>
            <li><NavLink to='/' className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>About</NavLink></li>
            <li><NavLink to='/admin' className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Dashboard</NavLink></li>
            {isAuthenticated ? (
              <li><button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded'>Logout</button></li>
            ) : (
              <li><NavLink to='/login' className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Login</NavLink></li>
            )}
          </ul>
        </div>


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
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <NavLink to='/' onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>About</NavLink>
          {isAuthenticated && (
            <NavLink to="/admin" onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Dashboard</NavLink>
          )}
          {!isAuthenticated ? (
            <NavLink to="/login" onClick={toggleMenu} className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Login</NavLink>
          ) : (
            <button onClick={handleLogout} className={({isActive}) => `hover:text-blue-400 ${isActive ? 'text-blue-500' : ''}`}>Logout</button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar