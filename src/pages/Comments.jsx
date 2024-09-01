import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
import "./style.css"

const Comments = () => {

  const [comments, setComments] = useState([]);

  const fetchComments = async() => {
    const getComment = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setComments(getComment.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])
  return (
    <>
      <Navbar/>
      <div className='comments'>
        {
          comments.map((comment, key) => <div key={comment.id} className='single-comment'>{comment.name}</div>)
        }
      </div> 
    </>
  )
}

export default Comments
