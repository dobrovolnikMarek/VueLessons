<template>
  <div id="app" class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control" v-model="email">
      </div>
    </form> 
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      email: ""
    }
  }
}
</script>

<style>

</style>
