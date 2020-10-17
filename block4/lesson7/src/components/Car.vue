<template>
    <div class="car">
        <h3>Name: {{carName}} \ {{reverseName}}</h3>
        <p>Year: {{carYear}}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti.</p>
    </div>
</template>

<script>
export default {
    //props: ["carName", "carYear"],//props: ["параметр которой bind'или в род. компонентне"]
    // props: {
    //     carName: String,
    //     carYear: Number
    // },
    props: {
        carName: {
            type: String,
            //required: true,
            default: "Default Name"
        },
        carYear: Number
    },
    computed: {
        reverseName: function(){
            return this.carName.split("").reverse().join("");
        }
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