<template>
  <div class="content">
    <img src="../assets/starwars_logo.png" class="logo-amarelo" />
    <div class="main-container">
      <div class="box-container">
        <SocialLogin />
      </div>
    </div>
  </div>
</template>

<script>
import SocialLogin from "../components/SocialLogin";

export default {
  components: {
    SocialLogin,
  },
};
</script>

<style></style>
