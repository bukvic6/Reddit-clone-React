import axios from "axios";
import api from './InterceptorService';


const COMM_BASE_URL = "http://localhost:8080/api/community";

class CommunityService{

    getCommunities(){
        return axios.get(COMM_BASE_URL);
    }
    createCommunity(community){
        return api.post(COMM_BASE_URL + '/create', community)
    }
    getCommunityById(id){
        return axios.get(COMM_BASE_URL + '/' + id)
    }
}
export default new CommunityService()