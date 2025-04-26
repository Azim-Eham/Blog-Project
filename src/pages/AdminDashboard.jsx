import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePost} from '../redux/postsSlice'
import { toast } from 'react-hot-toast';

const AdminDashboard = () => {

  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')){
      dispatch(deletePost(id));
      toast.success('Post deleted successfully!');
    }
  }

  return (
    <div className='p-4 sm:p-6 max-w-6xl mx-auto'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-4'>
          Admin Dashboard
        </h1>
        <Link to='/create' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          Create New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div
            key={post.id}
            className="border rounded-lg p-4 flex flex-col justify-between shadow hover:shadow-lg transition-all">
              <div>
                {post.thumbnail && (
                  <img 
                    src={post.thumbnail} 
                    alt="Thumbnail" 
                    className="h-40 w-full object-cover mb-4 rounded"
                  />
                )}
                <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
                <p className='text-gray-600 text-sm'>{post.content}</p>
              </div>
              <div className="flex mt-4 space-x-4">
                <Link 
                  to={`/admin/edit/${post.id}`} 
                  className="text-green-600 hover:underline text-sm"
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(post.id)} 
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminDashboard