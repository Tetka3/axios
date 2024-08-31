import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"

const Blogs = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const getPosts = await axios.get("https://jsonplaceholder.typicode.com/posts") 
    console.log(getPosts)
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
