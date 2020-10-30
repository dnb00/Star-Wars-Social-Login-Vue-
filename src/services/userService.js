import axios from "axios";
import router from "@/routes/routes";

const url = "http://localhost:5000/api/users";

export default class UserService {
  // Get Users
  getUsers() {
    return axios.post(url);
  }
  //Create User
  async saveUser(user) {
    await axios
      .post(url + "/create", { user })
      .then(() => {
        router.push("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
