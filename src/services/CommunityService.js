import axios from "axios";

const COMM_BASE_URL = "http://localhost:8080/api/community";

class CommunityService{

    getCommunities(){
        return axios.get(COMM_BASE_URL);
    }
}
export default new CommunityService()