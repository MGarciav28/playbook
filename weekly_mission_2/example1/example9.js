// Ejemplo 9: Uso del reduce, util para realizar una operacion reiteradas veces 
//sobre los elementos de un arreglo por ejemplo suma, resta, multiplicacion y division
const numbers9 = [1, 2, 3, 4, 5]
const numbers8 = [100, 5, 2]

//const modifieldArray = array.reduce((acumulador, valor) => valor1 signo_operacion valor2, valor_inicial )
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
const result_reduce = numbers8.reduce((acc1, element1) => acc1 / element1)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)
console.log(result_reduce)