<template>
  <div id="app" class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email"
          class="form-control" 
          v-model="email" @blur="$v.email.$touch()"
          :class="{'is-invalid': $v.email.$error}">
        <div id="validationServer03Feedback" class="invalid-feedback" v-if="!$v.email.required">
          Email field is required
        </div>
        <div id="validationServer03Feedback" class="invalid-feedback" v-if="!$v.email.email">
          This field should be an email
        </div>
      </div><!--@input="$v.email.$touch()"- валидируем поле email $touch()- иницилизирует валидацию -->
    </form> 

    
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
