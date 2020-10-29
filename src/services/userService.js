import axios from "axios";

const url = "http://localhost:5000/api/users";

export default class UserService {
  // Get Users
  getUsers() {
    return axios.get(url);
  }
}
