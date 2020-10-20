<template>
  <div id="app">
      <h2>{{title}}</h2>
      <input type="text" v-model="searchName ">
      <ul>
        <li v-for="name of filteredNames" :key="name">{{name}}</li>  
      </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      title: "Hello Vue",
      names: ["Max", "Tom", "Adam"],
      searchName: ""
    }
  },
  computed:{
    filteredNames() {
      return this.names.filter((name)=>{
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 
      })
    }
  },
  filters: {//Фильтры влияют только на отображение!!! Все фильтры создаются самостоятельно
    lowercase(value){
      return value.toLowerCase();
    }
  }
}
</script>

<style>

</style>
