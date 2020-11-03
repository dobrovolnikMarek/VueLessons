<template>
  <div class="container text-center pt-5">
    <app-counter :counter="counter"></app-counter>
    <app-actions @counterUpdated="counter += $event"></app-actions>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Actions from './components/Actions'

export default {
  name: 'App',
  data(){
    return{
      counter: 0
    }
  },
  components: {
    "app-counter": Counter,
    "app-actions": Actions
  }
}
</script>

<style>

</style>
