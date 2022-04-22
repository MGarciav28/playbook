// Ejemplo 3: Objeto con diferentes propiedades
const myPet = {
    name: "Duke",
    age: 4,
    color: "black",
    race: "schnauzer",
    nicknames: [
      "Negrito",
      "Lunecio",
      "Dukcito"
    ],
    address: {
      zip_code: "07890",
      street: "Calle Norte 84",
      suburb:"Nueva Tenochtitlan",
      city: "CDMX"
    }
  }

console.log("Ejemplo 3: Crear un objeto con diferentes propiedades");
console.log("Todo mi objeto");
console.log(myPet);
console.log(`Nombre:  ${myPet.name}`);
console.log("Sobrenombres");
console.log(myPet.nicknames);
console.log("Direccion");
console.log(myPet.address);
console.log("Otra forma de mostrar Direccion");
console.log(myPet["address"]);

