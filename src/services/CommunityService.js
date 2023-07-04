import axios from "axios";
import api from './InterceptorService';


const COMM_BASE_URL = "http://localhost:8080/api/community";

class CommunityService{

    getCommunities(){
        return axios.get(COMM_BASE_URL+ '/all' );
    }
    createCommunity(community){
        return api.post(COMM_BASE_URL, community, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
    }
    getCommunityById(id){
        return axios.get(COMM_BASE_URL + '/' + id)
    }
    searchCommunities(params){
        return axios.get(COMM_BASE_URL + `/search`,{params})
    }
    deleteCommunity(id){
        return api.delete(COMM_BASE_URL + '/' + id)
    }
}
export default new CommunityService()