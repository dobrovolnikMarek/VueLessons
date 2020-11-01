import Vue from 'vue'
import App from './App.vue'
import VueResourse from "vue-resource"

Vue.use(VueResourse)
Vue.config.productionTip = false
Vue.http.options.root = "http://localhost:3000/"

new Vue({
  render: h => h(App),
}).$mount('#app')
