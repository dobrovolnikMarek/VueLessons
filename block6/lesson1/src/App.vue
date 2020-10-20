<template>
  <div id="app">
      <h2>{{title}}</h2>
      <h2>{{title | lowercase}}</h2><!--вызывается фильтр через | и метод-->
      <h2>{{title | uppercase}}</h2><!--изменяется только отображение на странице-->
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
  filters: {//Фильтры влияют только на отображение!!! Все фильтры создаются самостоятельно
    lowercase(value){
      return value.toLowerCase();
    }
  }
}
</script>

<style>

</style>
