import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Comments = () => {

  const [comments, setComments] = useState([]);

  // const fetchComments = asyn() => {
  //   const getComment = await axios.get("https://jsonplaceholder.typicode.com/comments");
  //   console.log(getComment);
  // };

  const fetchComments = () => {
    const getComment = axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(getComment)

  }

  useEffect(() => {

  })
  return (
    <>
      <Navbar/>
      <div className='comments'>
        {

        }
      </div> 
    </>
  )
}

export default Comments
