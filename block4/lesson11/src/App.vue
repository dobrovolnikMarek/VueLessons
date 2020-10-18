<template>
  <div id="app">
    <h1>{{carName}}</h1>
    <app-counter></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged = "carName = $event"></app-car>
  </div>
</template>

<script>
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
    data() {
      return {
        carName: "Ford from parent",
        carYear: 2018
      }
    },
    methods: {
      changeNameToAudi() {
        this.carName = "Audi"
      }
    },
    components: {
      "app-car": Car,
      "app-counter": Counter
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
