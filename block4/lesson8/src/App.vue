<template>
  <div id="app">
    <h1>{{carName}}</h1>
    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged = "carName = $event"></app-car>
  </div>
</template>

<script>
import Car from './components/Car.vue'

export default {
  name: 'App',
  data(){
    return{
      carName: "Ford from parent",
      carYear: 2018
    }
  },
  components: {
    "app-car": Car
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
