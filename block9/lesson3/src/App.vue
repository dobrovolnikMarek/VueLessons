<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
           <router-link class="nav-link" to="/">Home</router-link> <!--router-link === a -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cars">Cars</router-link>
        </li>
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
