<template>
  <Menu />
  <img src="../assets/starwars_logo.png" class="logo-amarelo" />
  <div class="content">
    <div class="main-container flex-user-card">
      <div class="card white" v-for="user of users" v-bind:key="user._id">
        <div class="card-content">
          <img class="rounded3" :src="user.picture" />
          <h1>{{ user.userName }}</h1>
          <h3>{{ user.email }}</h3>
          <div class="flex-user-card px-10">
            <img src="@/assets/icons/icons8-clock-50.png" />
            <p>{{ user.createdAt }}</p>
          </div>
          <div v-if="user.location" class="flex-user-card px-10">
            <img src="@/assets/icons/icons8-location-50.png" />
            <p>{{ user.location?.name }}</p>
          </div>
          <div v-if="user.birthday" class="flex-user-card px-10">
            <img src="@/assets/icons/icons8-birthday-50.png" />
            <p>{{ user?.birthday }}</p>
          </div>
          <div>
            <img
              v-if="user.loginType === 'google'"
              src="@/assets/icons/icons8-google-50.png"
            />
            <img
              v-if="user.loginType === 'facebook'"
              src="@/assets/icons/icons8-facebook-50.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/userService";
import Menu from "@/components/Menu";
const userService = new UserService();

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      const users = await userService.getUsers();
      this.users = users;
    },
  },
  components: {
    Menu,
  },
};
</script>

<style></style>
