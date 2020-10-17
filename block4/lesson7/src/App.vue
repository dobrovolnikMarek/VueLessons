<template>
  <h1>Parent: {{carName}}</h1>
  <app-car 
  :carName="carName"
  :carYear="carYear"></app-car><!--:carName="carName" === :параметр="переменная" -->
</template>

<script>
 import Car from "./components/Car" //Локально регистрируем компонент

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

</style>
