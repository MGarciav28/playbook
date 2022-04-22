// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Duke",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} saluda a ${yourPet}`)
  },  
  goForComida: function(yourComida){
      console.log(`Ambos fueron por ${yourComida}`);
  }
  
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Rene");
myPet.goForComida("Taquitos");
myPet.sayHelloToMyPet("Tato");
myPet.goForComida("Hamburguesas");
