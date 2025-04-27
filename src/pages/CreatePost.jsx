import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addPost} from '../redux/postsSlice'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-hot-toast';

const CreatePost = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !excerpt || !content || !thumbnail) {
      alert('Please fill in all fields');
      return;
    }

    const newPost = {
      id: uuidv4(),
      title,
      excerpt,
      content,
      thumbnail,
    };

    dispatch(addPost(newPost));
    toast.success('Post created successfully! 🎉');

    setTitle('');
    setExcerpt('');
    setContent('');
    setThumbnail('');
    
    navigate('/admin')
  }

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>Create New Post</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className="block font-medium mb-2">Upload Thumbnail</label>
          <input 
            type="file" 
            accept="image/*" 
            className="w-[20vw] border rounded p-2"
            onChange={handleThumbnailChange}
          />
        </div>

        <div>
          <label className='block font-medium mb-4'>Title</label>
          <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
          className='w-full border rounded p-2' />
        </div>

        <div>
          <label className="block font-medium mb-2">Excerpt</label>
          <textarea 
            className="w-full border rounded p-2" 
            value={excerpt} 
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Enter a short excerpt"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-2">Content</label>
          <textarea 
            className="w-full border rounded p-2 h-40" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the full content"
          ></textarea>
        </div>

        <div>
          <button 
            type="submit" 
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-all"
          >
            Publish Post
          </button>
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Live Preview</h2>
        <div className="border p-4 rounded shadow-sm">
        {thumbnail && (
          <div className="mt-4">
            <img 
              src={thumbnail} 
              alt="Thumbnail Preview" 
              className="h-40 object-cover rounded"
            />
          </div>
        )}
          <h3 className="text-lg font-bold">{title || 'Title will appear here...'}</h3>
          <p className="text-gray-700">{excerpt || 'Excerpt will appear here...'}</p>
          <div className="mt-4 text-sm text-gray-600">{content || 'Content will appear here...'}</div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost