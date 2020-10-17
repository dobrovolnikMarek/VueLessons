<template>
    <div class="car">
        <h3>Name: {{carName}} \ {{reverseName}}</h3>
        <p>Year: {{carYear}}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti.</p>
        <button @click="changeName">Change name</button>
    </div>
</template>

<script>
export default {
    props: ["carName", "carYear"],//props: ["параметр которой bind'или в род. компонентне"]
    // props: {
    //     carName: String,
    //     carYear: Number
    // },
    // props: {
    //     carName: {
    //         type: String,
    //         //required: true,
    //         // default: "Default Name"
    //     },
    //     carYear: Number
    // },
    methods: {
         changeName(){
            this.carName = "Mazda";
            this.$emit("nameChanged", this.carName);//1 параметр - событие которое будет прослушиваться; 
                                      //2 параметр - значения которыми хотим уведомить другие компоненты
        }
    },
    computed: {
        reverseName: function(){
            return this.carName.split("").reverse().join("");
        },

    }
}
</script>

<style>
    .car{
        border: 1px solid black;
    }

    .car h3{
        margin-bottom: 5px;
    }
</style>