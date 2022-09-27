import axios from "axios";

const POST_BASE_URL = "http://localhost:8080/api/posts/all";

class PostService {
    
    getPosts(){
        return axios.get(POST_BASE_URL);
    }
}
export default new PostService()