<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link class="nav-item" exact tag="li" to="/" active-class="active">
           <a class="nav-link">Home</a>
        </router-link>
        <router-link class="nav-item" tag="li" to="/cars" active-class="active">
          <a class="nav-link">Cars</a>
        </router-link>
      </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>

</style>
