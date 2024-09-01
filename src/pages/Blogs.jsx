import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"

const Blogs = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const getPosts = await axios.get("https://jsonplaceholder.typicode.com/posts") 
   setPosts(getPosts.data)
  }

  useEffect(() => {
    fetchPosts();
  },[])

  return (
    <>
      <Navbar/>
      <div className='blogs'>
        {
          posts.map((post, key) => <li key={post.id}>{post.body}</li>)
        }
      </div>
    </>
  )
}

export default Blogs
