<template>
  <div class="signup-buttons">
     <div id="google-signin-btn" class="g-signin2" data-onsuccess="onSignIn"></div>
     <button v-on:click="signOut" >Deslogar</button>
  </div>
</template>

<script>

export default {
  name: "SocialLogin",
  data(){
    return {
    }
  },
  mounted(){
    let googleMeta = document.createElement('meta');
    googleMeta.setAttribute('name','google-signin-client_id');
    googleMeta.setAttribute('content','318086479108-b4uuh8ta0gdkavvnj71nc4uf6m30pils.apps.googleusercontent.com')
    document.head.appendChild(googleMeta);

     // eslint-disable-next-line no-undef
     gapi.signin2.render('google-signin-btn',{
       onsuccess: this.onSignIn
     })
  },
  methods: {
    onSignIn(googleUser){
      console.log(googleUser);
    },
    signOut(){
      // eslint-disable-next-line no-undef
      let auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function (){
        console.log('Deslogou');
      })
    }
  },
  components: {

  }
}
</script>

<style>

</style>