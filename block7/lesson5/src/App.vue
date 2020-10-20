<template>
  <div id="app">
     <h2>Block7</h2>
    <select name="" id="" v-model="social">
      <option v-for="s in socialList" :key="s">{{s}}</option>
    </select>
    <hr>
    <p>{{social}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      defaultSocial: "VK",
      social: "Instagram",
      socialList: ["Facebook", "VK", "Instagram"]
    }
  }
}
</script>

<style scoped>
  
</style>
