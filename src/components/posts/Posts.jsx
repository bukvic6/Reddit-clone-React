import Post from '../../components/post/Post'
import React, { useEffect, useState} from 'react'
import "./posts.css"
import PostService from '../../services/PostService';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await PostService.getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="posts">
    {posts.length > 0 ? (
      <div>
      {posts.map((post,id)=>{
        return <Post key={post.id} data={post} id = {id}/>
      })}
    </div>
    ) : (
      <p className="loading">Loading... </p>
    )}
  </div>
);
}
export default Posts;
