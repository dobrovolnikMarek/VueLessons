<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <app-second-count></app-second-count>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Actions from './components/Actions'
import SecondCounter from "./components/SecondCounter";

export default {
  components: {
    "app-counter": Counter,
    "app-actions": Actions,
    "app-second-count": SecondCounter
  }
}
</script>

<style>

</style>
