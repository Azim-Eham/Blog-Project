import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../redux/authSlice'

const Navbar = () => {


    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
      dispatch(logout());
      navigate('/');
    }


  return (
    <nav className='bg-black text-white shadow-md px-6 py-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Link to='/'>📰 MyBlog</Link>
        </div>
        <div>
          <input type="search" placeholder="Search..." className="px-2 py-1 rounded bg-gray-700 w-[300px]" />
          <button
            className='bg-blue-500 px-2 py-1 mx-2 rounded hover:bg-blue-600 cursor-pointer'>
            Search
          </button>
        </div>
        <div>
          <ul className='flex space-x-4'>
            <li><NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-500' : '')}>Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => (isActive ? 'text-blue-500' : '')}>About</NavLink></li>
            <li><NavLink to='/admin' className={({isActive}) => (isActive ? 'text-blue-500' : '')}>Dashboard</NavLink></li>
            {isAuthenticated ? (
              <li><button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded'>Logout</button></li>
            ) : (
              <li><NavLink to='/login' className={({isActive}) => (isActive ? 'text-blue-500' : '')}>Login</NavLink></li>
            )}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar