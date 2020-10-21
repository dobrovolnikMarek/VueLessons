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
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password"
          class="form-control" 
          v-model="password" @blur="$v.password.$touch()"
          :class="{'is-invalid': $v.password.$error}">
        <div id="validationServer03Feedback" class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{$v.password.$params.minLength.min}}. Now it is {{password.length}}.
        </div>
      </div>
      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input type="password" id="confirm"
          class="form-control" 
          v-model="confirmPassword" @blur="$v.confirmPassword.$touch()"
          :class="{'is-invalid': $v.confirmPassword.$error}">
        <div id="validationServer03Feedback" class="invalid-feedback" v-if="!$v.confirmPassword.samePswd">
          Passwords should match
        </div>
      </div>
    </form> 

    
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'App',
  data(){
    return{
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  validations:{
    email:{
      required, 
      email
    },
    password:{
      minLength: minLength(6)
    },
    confirmPassword: {
      samePswd: sameAs((vue)=>{
        return vue.password;
      })
    }
  }
}
</script>

<style>

</style>
