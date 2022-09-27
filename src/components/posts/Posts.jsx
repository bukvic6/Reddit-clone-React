import axios from 'axios';
import Post from '../../components/post/Post'
import React, { useEffect, useState} from 'react'
import "./posts.css"


const API_URL = 'http://localhost:8080/api/posts/all';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return(
    <div className="wrapper">
      <div className="posts">
      {posts.map((post,id)=>{
        return <Post data={post} id = {id}/>
      })}
    </div>
    {posts.length > 0 ? (
      <div className="content">
        {posts.map((post) => (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="loading">Loading... </p>
    )}
  </div>
  
);



  
}
export default Posts;


// export default function Posts() {
//   return (
//     <div className='posts'>
//       <div className="postWrapper">
//         <Post/>
//       </div>
//     </div>
//   )
// }
