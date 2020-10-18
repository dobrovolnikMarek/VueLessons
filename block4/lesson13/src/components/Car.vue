<template>
    <div>
        <slot name="title"></slot>
        <hr>
        <hr>
        <slot name="text"></slot>    
    </div>
</template>

<script>

export default {
    props:{
        carName:{
            type: String
        }
    }
}
</script>

<style scoped>
    div {
        padding: 10px;
        border: 1px solid black;
    }
    p{
        font-size: 20px;
    }
</style>