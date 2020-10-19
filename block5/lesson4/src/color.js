export default {
    bind(el, bindings){
        //el.style.color="blue";
        el.style.color = bindings.value;
    }
}