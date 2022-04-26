// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Slovakia', 'Denmark', 'Serbia', 'Sweden', 'Norway', 'Iceland', 'Russia', ]

//const modifieldArray = arr.filter(element) => element.metod('string')
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)