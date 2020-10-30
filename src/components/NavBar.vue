<template>
  <div class="nav px-10 py-13">

    <Menu />
    

    
  </div>

</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'NavBar',
  data(){
    return{
      user: {}
    }
  }, 
  mounted(){
    const userData = JSON.parse(localStorage.getItem('loginUser'));
    this.user = userData
    console.log(userData);
  },
  components: {
    Menu
  }
}
</script>

<style>

</style>