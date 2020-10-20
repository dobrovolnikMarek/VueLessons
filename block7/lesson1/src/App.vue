<template>
  <div id="app">
    <h2>Block7</h2>
    <input type="text" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      name:""
    }
  }
}
</script>

<style>

</style>
