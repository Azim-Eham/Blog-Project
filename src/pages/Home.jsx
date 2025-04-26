import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = () => {

  const posts = useSelector((state) => state.posts.posts);
  
  return (
    <div>

    </div>
  )
}

export default Home