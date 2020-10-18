<template>
  <div id="app">
    <app-car>
      <h2 slot="title">{{carName}} + html</h2>
      <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi.</p>
    </app-car>
  </div>
</template>

<script>
import Car from './components/Car.vue'


export default {
    data(){
      return{
        carName: "Ford"
      }
    },
    components: {
      "app-car": Car
    }
  }
</script>

<style scoped>
    h2{
      color: red;
    }
</style>
