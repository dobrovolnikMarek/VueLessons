<template>
  <div id="app">
     <h2>Block7</h2>
    <label for="">
      <input type="radio" value="inst" v-model="social">Instagram
    </label>
    <label for="">
      <input type="radio" value="vk" v-model="social">VK
    </label>
    <label for="">
      <input type="radio" value="fb" v-model="social">Facebook
    </label>
    <hr>
    <p>{{social}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      social: "fb"
    }
  }
}
</script>

<style scoped>
  
</style>
