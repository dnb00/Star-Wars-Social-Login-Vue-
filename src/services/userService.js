import axios from "axios";
import router from "@/routes/routes";

const url = "http://localhost:5000/api/users";

export default class UserService {
  // Get Users
  async getUsers() {
    const res = await axios.get(url + "/");
    return res.data;
  }
  //Create User
  async saveUser(user) {
    await axios
      .post(url + "/create", { user })
      .then(() => {
        router.push("/home");
      })
      .catch((e) => {
        throw e;
      });
  }
}
