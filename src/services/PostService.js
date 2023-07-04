import axios from "axios";
import api from "./InterceptorService";

const POST_BASE_URL = "http://localhost:8080/api/post";

const REACTION_BASE_URL = "http://localhost:8080/api/reaction";

class PostService {
    
    getPosts(){
        return axios.get(POST_BASE_URL + "/all");
    }
    getCommunityPosts(id){
        return axios.get(POST_BASE_URL + "/communityPosts/" + id)
    }
    createPost(post){
        return api.post(POST_BASE_URL, post, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
    }
    searchPosts(params){
        return axios.get(POST_BASE_URL + `/search`,{params})
    }
    postReaction(reaction){
        return api.post(REACTION_BASE_URL, reaction)
    }
    deletePost(postId){
        return api.delete(POST_BASE_URL + "/" + postId)
    }

}
export default new PostService()