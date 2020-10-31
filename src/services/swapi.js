import axios from "axios";

const url = "http://localhost:5000/api/swapi";

export default class SwapiService {
  async getFilmes() {
    const res = await axios.get(url);
    return res.data.data.results;
    // .then((res) => {
    //   this.filmes = res.data.data.results;
    //   this.loading = false;
    // })
  }
}
