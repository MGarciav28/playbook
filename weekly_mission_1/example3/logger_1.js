/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

//Aqui se usa la palabra module
module.exports = (message) => {
  
    console.log(`info: ${message}`)
  }