<template>
  <div id="app">
    <h2>Block7</h2>
    <textarea v-model="name"></textarea>
    <p>{{name}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      name:"HELLO"
    }
  }
}
</script>

<style scoped>
  textarea{
    height: 100px;
    width: 400px;
  }

  p{
    white-space: pre;
  }
</style>
