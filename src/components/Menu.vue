<template>
  <div id="app">
  <header class="header">
    <nav class="header__nav">
      <ul class="header__navbar">
        <li class="header__item">
          <a href="#" class="header__link">
              <img class="rounded" :src="user.picture"   @click="show = !show" />
          </a>
          <transition name="dropdown">
            <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Privacy">
                   <div>
                     <img class="rounded2" :src="user.picture"/>
                     <div class="dropdown__menu-text">{{user.userName}}</div>
                     <div class="dropdown__menu-text">daniel@gmail.com</div>
                   </div>
                  </a>
                </li>
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Data &amp; personalization">
                    <div class="dropdown__menu-svg">
                       <svg viewBox="0 0 640 512">
                        <path fill="currentColor" d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z" />
                      </svg>
                    </div>
                    <div class="dropdown__menu-text">Usuários registrados</div>
                  </a>
                </li>
                <!-- Dropdown Menu Separator -->
                <hr>
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Help">
                    <div class="dropdown__menu-svg">
                     <svg viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 169.92c-28.28.41-52.84 9.62-71.37 28.17-18 18-27.69 41.94-27.28 67.44.78 50.23-3.91 100.5-14 149.39-1.81 8.66 3.78 17.12 12.41 18.91 8.5 1.66 17.09-3.77 18.91-12.44 10.56-51.17 15.5-103.78 14.69-156.35-.25-16.77 6.09-32.5 17.91-44.31 18.66-18.66 42.27-18.8 48.75-18.8 37.12.55 66.41 30.19 66.97 66.06.78 50.37-2.97 100.86-11.12 150.06-1.44 8.72 4.44 16.95 13.16 18.39.91.16 1.78.22 2.66.22 7.69 0 14.47-5.55 15.75-13.39 8.47-51.08 12.34-103.48 11.56-155.79-.87-53-44.81-96.76-99-97.56zm-.09 86.09c-8.84.14-15.87 7.41-15.75 16.25 1.12 73.39-8.22 144.99-27.78 215.07l-1.22 4.33c-1.85 6.63 1.74 20.34 15.41 20.34 7 0 13.41-4.61 15.41-11.66l1.22-4.37c20.41-73.08 30.16-147.74 28.97-224.21-.14-8.84-8.23-15.9-16.26-15.75zM112.66 149.79c-25.19 30.98-38.72 70.11-38.09 110.15.62 39.56-2.62 79.14-9.59 117.61-1.56 8.7 4.19 17.03 12.91 18.61.97.17 1.91.25 2.87.25 7.56 0 14.31-5.42 15.72-13.14 7.34-40.53 10.72-82.18 10.09-123.82-.53-33.01 10.19-63.95 30.91-89.47 5.59-6.86 4.53-16.94-2.31-22.51-6.85-5.55-16.91-4.57-22.51 2.32zm399.22 103.03c-.25-16.5-2.19-33.03-5.75-49.14-1.91-8.61-10.34-14-19.06-12.17-8.62 1.91-14.09 10.44-12.19 19.08 3.09 14 4.78 28.39 5 42.73.12 7.66.16 15.31.09 22.97-.06 8.83 7.03 16.05 15.87 16.12h.12c8.78 0 15.94-7.08 16-15.87.07-7.91.04-15.81-.08-23.72zM252.6.05C182.63-1.29 118.32 24.88 70.32 72.91 24.04 119.22-.87 180.76.16 246.2c.12 7.55.06 15.09-.16 22.62-.25 8.83 6.72 16.2 15.56 16.45H16c8.62 0 15.75-6.87 16-15.55.22-8 .28-16.02.16-24.03-.9-56.69 20.69-110.04 60.78-150.16 41.78-41.84 98.9-64.37 159.15-63.48 74.69 1.09 144.87 38.23 187.75 99.32 5.12 7.23 15.12 8.97 22.28 3.91 7.25-5.08 9-15.05 3.91-22.28C417.28 43.52 337.5 1.3 252.6.05zm1.28 84.93a182.36 182.36 0 0 0-45.19 4.91c-8.59 2.03-13.91 10.66-11.87 19.26 2.03 8.58 10.75 13.87 19.25 11.86 12.12-2.86 25.09-4.25 37.31-4.03 82.78 1.22 151.12 67.56 152.37 147.89.62 39.65-1.34 79.59-5.81 118.7-1 8.78 5.31 16.7 14.09 17.7.62.08 1.22.11 1.84.11 8 0 14.94-6.02 15.87-14.19 4.62-40.47 6.62-81.79 6-122.82-1.49-97.44-83.99-177.92-183.86-179.39z" />
                      </svg>
                    </div>
                    <div class="dropdown__menu-text" @click="deslogar">Deslogar</div>
                  </a>
                </li>
        
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </nav>
  </header>

</div>

</template>

<script>
import router from "../routes/routes";

export default {
 name:'Menu',
 data(){
   return{
     show:false,
      user: {}
   }
 }, 
 methods: {
   deslogar(){

    if (this.user.loginType === "google") {
    // eslint-disable-next-line no-undef
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.removeItem("googleToken");
      localStorage.removeItem("loginUser");
      router.push('/login');
    });
  } else {
    // eslint-disable-next-line no-undef
    FB.logout(function(){
      localStorage.removeItem("facebookToken");
      localStorage.removeItem("loginUser");
      router.push('/login');
    });
  }
  //return router.push('/login');
   }
 },
 mounted(){
    const userData = JSON.parse(localStorage.getItem('loginUser'));
    this.user = userData
    console.log(userData);
  },
}
</script>

<style scoped>
  @import "../assets/css/menu.css";
</style>