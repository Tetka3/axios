import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";

const Comments = () => {

  const [comments, setComments] = useState([]);

  // const fetchComments = asyn() => {
  //   const getComment = await axios.get("https://jsonplaceholder.typicode.com/comments");
  //   console.log(getComment);
  // };

  const fetchComments = async() => {
    const getComment = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setComments(getComment.data)
    console.log(getComment)
  }

  useEffect(() => {
    fetchComments()
  }, [])
  return (
    <>
      <Navbar/>
      <div className='comments'>
        {
          comments.map((comment) => <div>comment.name</div>)
        }
      </div> 
    </>
  )
}

export default Comments
