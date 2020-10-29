<template>
  <div></div>
</template>

<script>
export default {
  created(){
    let filme = JSON.parse(this.$route.params.details);
   console.log(filme);
  }
}
</script>

<style>

</style>