import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { useDebounce} from '../hooks/useDebounce'

const Home = () => {

  const posts = useSelector((state) => state.posts.posts);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    post.excert.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );
  
  return (
    <div className='px-3 py-6 max-w-5xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-center'>
      📰 Blog Posts
      </h1>
      <div className='flex justify-center mb-4'>
        <input 
        className= "w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="search" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search posts..." />
      </div>
      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-600">No posts found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt.slice(0, 100)}...</p>
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home