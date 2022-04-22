//Ejemplo 4: Objeto con métodos
const myPet = {
    name: "Kisha",    
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} dice ¡Hola!`)
    },

    begsForFoot: function(){
        console.log(`${this.name} esta pidiendo comida`);
    }, 

    sayBye: function(){
        console.log(`${this.name} dice adios!`);
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  myPet.sayHello();
  myPet.begsForFoot();
  myPet.sayBye();
