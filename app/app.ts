"use strict";
let message = "Hello World";
console.log(message);
class Persona{
    nombre:string;
    apellido:string;
    añoNac:number;
    
    nombreCompleto(): string{
      return this.nombre + this.apellido;
    }
  
    añoDeNacimiento(): number{
      return this.añoNac;
    }
  
    constructor(nombre:string, apellido:string, añoNac:number){
      this.nombre = nombre;
      this.apellido = apellido;
      this.añoNac = añoNac;
    }
  }
  
  var persona1 = new Persona ("Jairo", "Villarroel", 1999)
  
  console.log(persona1.añoDeNacimiento())
  
  