export default {
    bind(el, bindings){
        //el.style.color="blue";
        const arg = bindings.arg;
        console.log('arg: ', arg);
        el.style[arg] = bindings.value;
    }
}