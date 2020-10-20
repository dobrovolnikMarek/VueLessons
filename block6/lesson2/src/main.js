import Vue from 'vue'
import App from './App.vue'

Vue.filter("uppercase", (val)=>{
  return val.toUpperCase();
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
