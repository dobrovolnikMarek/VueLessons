<template>
  <div>
      <h1>List</h1>
      <input type="text" v-model="searchName ">
      <ul>
        <li v-for="name of filteredNames" :key="name">{{name}}</li>  
      </ul>
  </div>
</template>

<script>
import ListMixin from "../listMixin.js"
export default {
    mixins: [ListMixin]
}
</script>

<style>

</style>