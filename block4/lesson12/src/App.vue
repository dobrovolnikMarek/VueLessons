<template>
  <div id="app">
    <app-counter></app-counter>
    <app-car></app-car>
  </div>
</template>

<script>
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'

export default {
    components: {
      "app-car": Car,
      "app-counter": Counter
    }
  }
</script>

<style>

</style>
