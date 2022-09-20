import React, { Component } from 'react'


class PostList extends Component {
    constructor(props){
        super(props)
        this.state ={
            posts: []

        }
    }
  render() {
    return (
      <div>
        <h2 className='text-center'>Post List</h2>
        <div className='row'>
            <table>
                <tbody>
                    {
                        this.state.posts.map(
                            post =>
                            <tr key={post.id}>
                                <td>{post.text}</td>
                                <td>{post.description}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
export default PostList
