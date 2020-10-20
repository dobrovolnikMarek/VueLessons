<template>
  <div id="app">
     <h2>Block7</h2>
     <input type="text" v-model.number="age">
     <p>{{age}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      age: 20
    }
  },
  watch: {
    age(val){
      console.log(val)
    }
  }
}
</script>

<style scoped>
  
</style>
