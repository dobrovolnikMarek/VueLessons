<template>
  <div id="app">
      <h2 v-colored="'green'">{{title}}</h2>
      
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      title: "Hello Vue"
    }
  }
}
</script>

<style>

</style>
