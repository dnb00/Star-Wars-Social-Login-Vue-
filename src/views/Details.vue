<template>
  <Menu />
  <img src="../assets/starwars_logo.png" class="logo-amarelo" />
  <div class="content" :class="loading ? 'text-center' : ''">
    <div class="lds-ring" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-else style="color: yellow">
      <ul>
        <li>
          <h1 style="text-align: center">{{ filme.title }}</h1>
          <p>Episode {{ filme.episode_id }}</p>
          <p>{{ filme.opening_crawl }}</p>
          <p>Characters:</p>
        </li>
        <ul>
          <li v-for="(personagem, index) in personagens" v-bind:key="index">
            <img src="../assets/falcon.png" class="falcon" />{{
              personagem.name
            }}
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu";

export default {
  data() {
    return {
      filme: {},
      personagens: [],
      loading: true,
    };
  },
  mounted() {
    this.filme = JSON.parse(this.$route.params.details);
    const user = JSON.parse(localStorage.getItem("loginUser"));
    axios
      .post("http://localhost:5000/api/swapi/personagens", {
        user: user,
        personagens: this.filme.characters,
      })
      .then((res) => {
        this.personagens = res.data.personagens;
        this.loading = false;
      })
      .catch((e) => {
        throw e;
      });
  },
  components: {
    Menu,
  },
};
</script>

<style></style>
