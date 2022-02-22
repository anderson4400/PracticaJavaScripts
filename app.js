//aqui esta la alerta.
// alert('Desde archivo externo 👀' );
// console.log('esto es entre comida dobles')
// let a = "Anderson Medina";

///Variables
// let nombreUsuario = "Ignacion";
// let edadUsuario = 33;
// console.log(nombreUsuario);

// let numeroUno = parseInt(prompt("Ingrese un numero"));
// let numeroDos = parseInt(prompt("Ingrese un numero"));
// let Resultado = numeroUno + numeroDos;

// console.log(Resultado);

// let opcionUsuario = prompt(`
// Elija una opcion
// 1: Libros
// 2: Peliculas
// 3: Juegos
// `)
// console.log(opcionUsuario);

// switch(opcionUsuario){
//     case '1':
//         console.log('Principito');
//     break;
//     case '2':
//         console.log('Matriz'); 
//     break;  
//     case '3':
//         console.log('NFS');
//     break;
//     default:
//     console.log('No ahi nada ');
//     break
// }

// let numero = 5;
// let ca = 0;
// while(numero ===5){

// ca++
// alert("el valor ahora es:"+ca)
//     if(ca===5){
//         numero =4;
//     }
// }

// const  frutas=["Manzana","Guinero"];

// frutas.push("Fresa");
// console.log(frutas);


//Funciones declarativa
// function numeroAleatorio(min, max){
//      return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numeroAleatorio(20,55))


// //Funcion Expresiva
// const Aleatorio = function(min, max){
//     return    Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(Aleatorio(10000,30000))

// //Funcion de Flecha
// const flecha = (min, max) =>{
//     return    Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(flecha(10000,30000))


/**Clases en javaScript */

const objecto = {
    nombre: "Valiente",
    duerme: true,
    edad: 20,
    enemigo: ["agua", "Perro"],
    padres:{
        nombre: "Juan",
        Apellido: "Manuel",
        Salud: true,
        edad:30,
    },

    probando: function(){
        console.log("nombre:"+this.nombre+"/n"+"Padres:"+this.padres.nombre);
    }

};

// console.log(objecto.nombre);
// console.log(objecto["duerme"]);

//trabajando con objectos anidados
// console.log(objecto.padres);
// console.log(objecto.padres.nombre);
// console.log(objecto.padres.Salud);


objecto.probando();
