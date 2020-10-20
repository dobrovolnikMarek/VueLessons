<template>
  <div id="app">
      <h2>{{title}}</h2>
      <input type="text" v-model="searchName ">
      <ul>
        <li v-for="name of filteredNames" :key="name">{{name}}</li>  
      </ul>
      <hr>
      <app-list></app-list>
  </div>
</template>

<script>
import ListMixin from "./listMixin.js"//Локальный миксин
                                      //Если в приложении есть набор общей функциональности, 
                                      //то необязательно дублировать код достаточно использовать миксины

export default {
  name: 'App',
  data(){
    return{
      title: "HELLO"
    }
  },
  mixins:[ListMixin],
  filters: {//Фильтры влияют только на отображение!!! Все фильтры создаются самостоятельно
    lowercase(value){
      return value.toLowerCase();
    }
  }
}
</script>

<style>

</style>
