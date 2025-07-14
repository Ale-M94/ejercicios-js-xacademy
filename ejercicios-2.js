//Ejercicio 1

// const miArray = ["hola", "chau", "perro", "gato"];

// function concatenarArray(arr1){
//     contenido = '';

//     for(let i=0; i<arr1.length; i++){
//         contenido += arr1[i];
//     }

//     return contenido;
// }

// console.log(concatenarArray(miArray));

//Ejercicio 2

// const arr1 = [4, 3, true, 'manzana'];
// const arr2 = ['pera', 3, false, true, 3, true];

// function coincidenciasArray(arr1, arr2){
//     const arrayCoincidencia = [];

//     for(let i=0; i<arr1.length; i++){
//         for(let x=0; x<arr2.length; x++){
//             if(arr1[i]===arr2[x]){
//                 if(!arrayCoincidencia.includes(arr1[i])){
//                     arrayCoincidencia.push(arr1[i]);
//                 }
//             }
//         }
//     }

//     return arrayCoincidencia;
// }

// console.log(coincidenciasArray(arr1, arr2));

//Ejercicio 3

// let carrito = {
//     total: 10,
//     productos: [
//         {
//             nombre: 'leche',
//             precio: 2,
//             unidades: 5
//         }
//     ]
// }

// class Producto {
//     constructor(nombre, precio, unidades){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.unidades = unidades;
//     }
// }

// function agregarProducto(nombre, precio, unidades){
//     let producto = new Producto(nombre, precio, unidades);
//     carrito.productos.push(producto);
//     carrito.total += producto.precio * producto.unidades;
// }

// agregarProducto('papas', 5, 5);

