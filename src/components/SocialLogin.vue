<template>
  <div class="signup-buttons">
     <div id="google-signin-btn"></div>
      <a href="#" class="facebook-signup" @click="loginWithFacebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            Facebook
        </a>

  </div>
</template>

<script>
import { initFbsdk } from '@/config/facebook_oAuth.js'
import UserService from '@/services/userService.js'
const userService = new UserService();
export default {
  name: "SocialLogin",
  mounted(){
    initFbsdk()
    let googleMeta = document.createElement('meta');
    googleMeta.setAttribute('name','google-signin-client_id');
    googleMeta.setAttribute('content','318086479108-b4uuh8ta0gdkavvnj71nc4uf6m30pils.apps.googleusercontent.com')
    document.head.appendChild(googleMeta);

     // eslint-disable-next-line no-undef
     gapi.signin2.render('google-signin-btn',{
        'width': 170,
        'height': 50,
        'longtitle': false,
        'theme': 'dark',
       onsuccess: this.onSignIn
     })
  },
  methods: {
    onSignIn(googleUser){
      localStorage.setItem('googleToken',googleUser.Ca)
      let user = {
        userId:googleUser.Ca,
        userName:googleUser.tt.Ad,
        picture: googleUser.tt.dK,
        loginType: 'google'
      };
      localStorage.setItem('loginUser',JSON.stringify(user))
      userService.saveUser(user);
    },
    loginWithFacebook () {
      // eslint-disable-next-line no-undef
      FB.login(response => {
        localStorage.setItem('facebookToken',JSON.stringify(response.authResponse.accessToken))
        if(response.authResponse){
          // eslint-disable-next-line no-undef
          FB.api(`/me`,'GET',{"fields":'id,name,picture'},function(response){
          let user = {
            userId:response.id,
            userName:response.name,
            picture: response.picture.data.url,
            loginType: 'facebook'
          };
          localStorage.setItem('loginUser',JSON.stringify(user));
          userService.saveUser(user)
        })
        }
      })
    }
  },
  components: {

  }
}
</script>

<style>

</style>