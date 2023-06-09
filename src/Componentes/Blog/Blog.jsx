import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Blog = () => {
    const [post, setPost] = useState([])
    const navigate = useNavigate()
  
    const handleClick = () => {
      navigate('/blog/2')
    }
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(data => setPost(data))
     }, [])
 
  
    return(
      <div>
        <h1>Blog</h1>
  
        <ul>
       {post.map((item, index) => (
      <li key={index}>
        <Link to={`/blog/${item.id}`}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
      </div>
    )
}

export default Blog