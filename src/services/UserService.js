import axios from "axios";

const USER_BASE_URL = "http://localhost:8080/api/users";

class UserService{
    login(loginData){
        return axios.post(USER_BASE_URL + "/login", loginData);
    }
    register(registerData){
        return axios.post(USER_BASE_URL + "/register",registerData)
    }
}
export default new UserService()