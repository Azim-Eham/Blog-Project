import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
       <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-6">Oops! The page you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Go Back Home
          </Link>
      </div>
    </div>
   
  );
};

export default NotFound;