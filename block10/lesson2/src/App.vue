<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car Name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>

    <div class="form-group">
      <label for="year">Car Year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>

    <button class="btn btn-success" @click="createCar">Create Car</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      carName: '',
      carYear: 2018
    }
  },
  methods: {
    createCar(){
      const car = {
        name: this.carName,
        year: this.carYear
      }
      this.$http.post("http://localhost:3000/cars", car)
        .then(response=>{
          return response.json()
        })
      .then(data=>{
        console.log(data)
      })
    }
  }
}
</script>

<style>

</style>
