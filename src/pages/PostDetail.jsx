import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostDetail = () => {

  const {id} = useParams();


  const post = useSelector(state => state.posts.posts.find(p => p.id === id));

  if (!post) {
    return <div className='min-h-screen dark:bg-gray-800 dark:text-gray-200 text-center p-6'>Post not found</div>
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
      <div className='p-6 max-w-6xl mx-auto'>

        {post.thumbnail && (
          <img 
            src={post.thumbnail} 
            alt="Post Thumbnail" 
            className="w-full h-[30vh] md:h-[40vh] lg:h-[80vh] object-cover rounded-lg mb-6"
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