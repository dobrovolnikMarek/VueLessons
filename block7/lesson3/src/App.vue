<template>
  <div id="app">
    <h2>Block7</h2>
    <label for="">
      <input type="checkbox" value="inst" v-model="social">Instagram
    </label>
    <label for="">
      <input type="checkbox" value="vk" v-model="social">VK
    </label>
    <label for="">
      <input type="checkbox" value="fb" v-model="social">Facebook
    </label>
    <hr>
    <ul>
      <li v-for="s in social" :key="s">{{s}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      social: ["vk"]
    }
  }
}
</script>

<style scoped>
  
</style>
