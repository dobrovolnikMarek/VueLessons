<template>
  <div id="app">
      <h2 v-colored:color.font="'red'">{{title}}</h2>
      <h2 v-colored:background.delay.font="'green'">{{title}}</h2>
      <h2 v-font>Local Directive</h2>      
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      title: "Hello Vue"
    }
  },
  directives:{
    font:{
      bind(el){
        el.style.fontSize = "40px";
      }
    }
  }
}
</script>

<style>

</style>
