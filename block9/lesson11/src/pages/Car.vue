<template>
  <div>
    <h1>Car id {{id}}</h1>
    <button class="btn btn-sm btn-default" @click="goBackToCars">Back</button>
    <br>
    <router-link
            class="btn btn-info"
            tag="button"
            :to="{name: 'carFull', params: { id: id}, query:{name:'Mazda', year: 2000}, hash: '#scroll'}"
    >Car Full</router-link>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
    data(){
        return{
            //id: this.$router.currentRoute.params["id"]
            id: this.$route.params["id"]
        }
    },
  methods:{
    goBackToCars(){
      this.$router.push("/cars");
    }
  },
    watch:{
        $route(toR){
            this.id = toR.params["id"];
        }
    },
  beforeRouteLeave(to, fromR, next){
      if(window.confirm("Are you sure you want to leave?")){
        next()
      } else {
        next(false);
      }

  }
}
</script>

<style>

</style>