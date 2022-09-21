import React from 'react'
import Post from '../post/Post'
import "./posts.css"

const PostsData = [
  {
    username: 'Markic Marko',
    text: 'prvi postic'
  },
  {
    username: 'Markic Marko',
    text: 'drugi postic'
  },
  {
    username: 'Markic Marko',
    text: 'treci postic'
  }
]
const Posts = () => {
  return(
    <div className="posts">
      {PostsData.map((post,id)=>{
        return <Post data={post} id = {id}/>
      })}
    </div>
  )
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
