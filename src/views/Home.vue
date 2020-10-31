<template>
  <div>
    <Menu />
    <div class="main-container">
      <h2 class="heading" style="color: yellow">
        <img src="../assets/starwars_logo.png" class="logo-amarelo" />
      </h2>
      <div class="container">
        <div class="lds-ring" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <section v-else class="cards">
          <div
            class="card"
            v-for="filme of filmes"
            v-bind:key="filme.episode_id"
            v-on:click="showDetails(filme)"
          >
            <div class="card-content">
              <h1>{{ filme.title }}</h1>
              <p>{{ filme.opening_crawl }}</p>
              <p>{{ filme.producer }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import logo from "../assets/logo.svg";
import router from "../routes/routes";
import SwapiService from "@/services/swapi";

const swapiService = new SwapiService();

export default {
  data() {
    return {
      filmes: [],
      loading: true,
      hover: false,
      logo,
    };
  },
  methods: {
    async loadFilmes() {
      this.filmes = await swapiService.getFilmes();
      this.loading = false;
    },
    showDetails(filme) {
      router.push({
        name: "Details",
        params: { details: JSON.stringify(filme) },
      });
    },
  },
  mounted() {
    this.loadFilmes();
  },
  components: {
    Menu,
  },
};
</script>
