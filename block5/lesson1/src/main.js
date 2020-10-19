import Vue from 'vue'
import App from './App.vue'
import colorDirective from "./color"

Vue.directive("colored", colorDirective)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
