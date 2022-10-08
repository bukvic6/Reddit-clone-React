import axios from "axios";

const POST_BASE_URL = "http://localhost:8080/api/posts";

class PostService {
    
    getPosts(){
        return axios.get(POST_BASE_URL + "/all");
    }
    getCommunityPosts(id){
        return axios.get(POST_BASE_URL + "/communityPosts/" + id)
    }
}
export default new PostService()