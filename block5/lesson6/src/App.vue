<template>
  <div id="app">
      <h2 v-colored:color.font="'red'">{{title}}</h2>
      <h2 v-colored:background.delay.font="'green'">{{title}}</h2>
      
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
