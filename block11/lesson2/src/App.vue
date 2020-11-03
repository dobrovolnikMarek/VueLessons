<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Actions from './components/Actions'

export default {
  components: {
    "app-counter": Counter,
    "app-actions": Actions
  }
}
</script>

<style>

</style>
