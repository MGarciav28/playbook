// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que
// cumpla con la validación que indiques.
const names13 = ['Explorer No 1', 'Explorer 2', 'Explorer 3 No', 'No Explorer', 'Mision Comander']
const result = names13.findIndex((name) => name.length > 7)
const include = names13.findIndex((name) => name.includes('Mision'));
const startWith = names13.findIndex((name) => name.startsWith('No'));
const endsWith = names13.findIndex((name) => name.endsWith('No'));


console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)
console.log("Ejemplo 13: Primer elemento cuyo contenido incluya la palabra Mision esta en la posicion"+ include)
console.log("Ejemplo 13: Primer elemento cuya palabra comienza con No esta en la posición"+ startWith)
console.log("Ejemplo 13: Primer elemento cuya palabra termina con No esta en la posición "+ endsWith)