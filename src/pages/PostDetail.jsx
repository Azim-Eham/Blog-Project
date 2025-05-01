import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostDetail = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const post = useSelector(state => state.posts.posts.find(p => p.id === id));

  if (!post) {
    return <div className='min-h-screen dark:bg-gray-800 dark:text-gray-200 text-center p-6'>Post not found</div>
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
      <div className='p-6 max-w-6xl mx-auto'>
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 bg-gray-200 dark:bg-gray-500 px-4 py-2 rounded hover:bg-gray-300 transition-all"
        >
          ← Go Back
        </button>

        {post.thumbnail && (
          <img 
            src={post.thumbnail} 
            alt="Post Thumbnail" 
            className="w-full h-[30vh] md:h-[50vh] lg:h-[60vh] object-cover rounded-lg mb-6"
          />
        )}

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 italic mb-6">{post.excerpt}</p>
        <div className="text-lg leading-8 text-gray-400">
          {post.content}
        </div>
      </div>
    </div>
    
  )
}

export default PostDetail