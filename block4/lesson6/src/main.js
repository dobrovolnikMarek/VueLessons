import { createApp } from 'vue'
import App from './App.vue'
//import Car from "./components/Car"

const app = createApp(App)
//app.component("app-car",Car)//Глобально регистрируем компонент

app.mount('#app')
