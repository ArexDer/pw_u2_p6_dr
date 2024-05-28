console.log(Vue)

const app = Vue.createApp({
    template:` 
    <h1>Hola Mundo desde VUE.JS</h1>
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4,5,6,7,8]}}

    <p>{{false?'True':'False'}}</p>

    `
});

//Siempre es un estandar usar #myApp
app.mount('#myApp')

//Su forma de trabajr es con opciones con Funcionalidad:
//En java se usan metodos... en VUE se lo conoce como Opciones:
//OptionAPY:

