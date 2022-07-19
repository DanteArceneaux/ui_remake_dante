import axios from "axios";


const CREATE_USER_REST_API_URL = "http://localhost:8082/users/add";

class CreateUserService {
    createUser(user) {

        return axios.post(CREATE_USER_REST_API_URL, user);
    }
}

export default new CreateUserService();