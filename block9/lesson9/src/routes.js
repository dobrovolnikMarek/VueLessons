import VueRouter from 'vue-router'
import Home from "./pages/Home"
import Cars from "./pages/Cars"
import Car from "./pages/Car"
import CarFull from "./pages/CarFull"

export default new VueRouter({
    routes: [
        {
            path: "",
            component: Home
        },
        {
            path: "/cars",
            component: Cars
        },
        {
            path: "/car/:id",
            component: Car,
            children: [{
                path: "full", //localhost:8080/car/10/full
                component: CarFull,
                name: "carFull"
            }]
        }
    ],
    mode: "history",
    scrollBehavior(to){
        //to, from, savedPosition
        //to и from - это роуты
        if(to.hash){
            return {
                selector: to.hash
            }
        }
        return {
           x: 0,
           y: 0
        }
    }
})