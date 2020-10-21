<template>
  <div id="app" class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control" v-model="email" @blur="$v.email.$touch()">
      </div><!--@input="$v.email.$touch()"- валидируем поле email $touch()- иницилизирует валидацию -->
    </form> 

    <pre>{{$v.email}}</pre>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'App',
  data(){
    return{
      email: ""
    }
  },
  validations:{
    email:{
      required, 
      email
    }
  }
}
</script>

<style>

</style>
