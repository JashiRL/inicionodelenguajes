//const es una variables que no cambia 
// var es una variable que puede ir cambiandp
// esta es la forma de definir una funcion con la arrow Function 
//  const holamundo = (uno, dos) => {
//  }
//  

//revisar en mis tiempos libres como realizar obejtos y manipularlos en prpgramacon
//futa es la variable temporal y console. log es al forma de imprimir
const {frutas, money} = require('./frutas')  //** cuando se usan arreglos importados a fuerzas es necesario usar el mismo nombre con el que se mandan a traer */
//todo los valores de la variable frutas la va a recibir la constante fruits
frutas.forEach(fruta => {
    console.log('la fruta es:  ', fruta) 
})
console.log('Dinero: ', money)