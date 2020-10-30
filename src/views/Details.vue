<template>
  <div class="content" :class="loading ? 'text-center' : ''">
    <img src="../assets/starwars_logo.png" class="logo-amarelo" />
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

export default {
  data() {
    return {
      filme: {},
      personagens: [],
      loading: true,
    };
  },
  created() {
    this.filme = JSON.parse(this.$route.params.details);
    axios
      .post("http://localhost:5000/api/swapi/personagens", {
        personagens: this.filme.characters,
      })
      .then((res) => {
        this.personagens = res.data.personagens;
        console.log(res.data.personagens);
        this.loading = false;
      })
      .catch((e) => {
        throw e;
      });
  },
};
</script>

<style></style>
