<template>
  <div class="field">
    <a
      class="sns-btn sns-btn--google"
      id="googleSignIn"
      @click.prevent="loginWithGoogle"
    >
      <i class="sns-btn__icon fab fa-google"></i>
    </a>
    <a class="sns-btn sns-btn--facebook" @click.prevent="loginWithFacebook">
      <i class="sns-btn__icon fab fa-facebook-f"></i>
    </a>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { initFbsdk } from "@/config/facebook_oAuth.js";
import UserService from "@/services/userService.js";
const userService = new UserService();
export default {
  name: "SocialLogin",
  mounted() {
    initFbsdk();
    gapi.load("auth2", function () {
      let auth2 = gapi.auth2.init();
      let element = document.getElementById("googleSignIn");
      auth2.attachClickHandler(
        element,
        {},
        (googleUser) => {
          localStorage.setItem("googleToken", googleUser.Ca);
          let user = {
            userId: googleUser.Ca,
            userName: googleUser.tt.Ad,
            picture: googleUser.tt.dK,
            email: googleUser.tt.$t,
            loginType: "google",
          };
          localStorage.setItem("loginUser", JSON.stringify(user));
          userService.saveUser(user);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  },
  methods: {
    loginWithFacebook() {
      FB.login((response) => {
        localStorage.setItem(
          "facebookToken",
          JSON.stringify(response.authResponse.accessToken)
        );
        if (response.authResponse) {
          FB.api(
            `/me`,
            "GET",
            { fields: "id,name,email,birthday,picture,age_range,location" },
            function (response) {
              let user = {
                userId: response.id,
                userName: response.name,
                picture: response.picture.data.url,
                email: response.email,
                birthday: response.birthday,
                age: response.age_range,
                location: response.location,
                loginType: "facebook",
              };
              localStorage.setItem("loginUser", JSON.stringify(user));
              userService.saveUser(user);
            }
          );
        }
      });
    },
  },
  components: {},
};
</script>

<style></style>
