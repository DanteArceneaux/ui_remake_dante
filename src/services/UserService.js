import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8082/users";
const CREATE_USER_REST_API_URL = "http://localhost:8082/users/add";
const UPDATE_USER_REST_API_URL = "http://localhost:8082/users/update";


class UserService {
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }

    createUser(user) {

        return axios.post(CREATE_USER_REST_API_URL, user);
    }

    updateUser(user) {

        return axios.post(UPDATE_USER_REST_API_URL, user);
    }
    

}

export default new UserService();


