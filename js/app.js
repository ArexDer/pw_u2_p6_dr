console.log(Vue);

const estudiantes = [
  { nombre: "Diego", apellido: "Rivas" },
  { nombre: "Alexander", apellido: "Haro" },
  { nombre: "Fatima", apellido: "Gonzales" },
  { nombre: "Alexis", apellido: "Guanoluisa" },
  { nombre: "Aylin", apellido: "Mero" },
];

const app = Vue.createApp({
  //template:`
  //  <h1>Hola Mundo desde VUE.JS</h1>
  //  <p>{{1+1}}</p>
  //  <p>{{[1,2,3,4,5,6,7,8]}}

  //  <p>{{false?'True':'False'}}</p>

  //  `

  data() {
    return {
      mensaje: "Hola Mundo PROPIEDAD REACTIVA",
      valor: 7,
      lista: estudiantes,
      nombre:null,
      apellido: null
    }
  },
  methods: {
    //Una funcionalidad va dentro de un metodod
    //Pude recibir o no argumentos
    cambiarTexto() {
      this.mensaje = "Texto cambiado";
      //addParameters(this.mensaje) esto lo hace automatico.
    },
    sumar() {
      this.valor = this.valor + 100;
    },
    agregar(){
      console.log(this.nombre)
      console.log(this.apellido)

        //Boton que llame un estudiante con su nombre y su apellido QUEMADO
        const nuevo={
            nombre: this.nombre,
            apellido:this.apellido

            

        }
        this.lista.unshift(nuevo);
        this.resetear();
    },
    resetear(){
      this.nombre=null;
      this.apellido=null;
    },
             //Directamente en el argumento yo puedo aplicar DESESTRUCTURACION.
    agregar2({charCode}){

      //console.log(event)
      console.log()

     if(charCode !==13)return; //lo quito porque ahora tranquilamente se activa cunado de ENTER.
     if(this.nombre!==null && this.apellido!==null){
        this.agregar();
      }
     
    }

    //FIN DE METHODS
  },
});

//Siempre es un estandar usar #myApp
app.mount("#myApp");

//Su forma de trabajr es con opciones con Funcionalidad:
//En java se usan metodos... en VUE se lo conoce como Opciones:
//OptionAPY:

