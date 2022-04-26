// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
const age_2 = ages.find((age) => age > 26)
const age_3 = ages.find((age) => age == 18)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)
console.log("Ejemplo 11: Primera edad mayor a 26 es: "+ age_2)
console.log("Ejemplo 11: Primera edad igual a 18 es: "+ age_3)