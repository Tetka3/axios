import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"

const Blogs = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {

  }

  useEffect(() => {

  })

  return (
    <div>
      <Navbar/>
      {
        posts.map(post => <li>{}</li>)
      }
    </div>
  )
}

export default Blogs
