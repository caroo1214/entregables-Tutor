import { Personaje } from "./personajes";

export class Mago extends Personaje {
    private hechizo: string;
  
    constructor(nombre: string, nivel:number, salud: number, fuerza:number, hechizo: string) {
      super(nombre,nivel, salud, fuerza);
      this.hechizo = hechizo;
    }
  
    atacar(): void {
      console.log(`${this.nombre} lanza ${this.hechizo}  a Thor y causa ${this.fuerza} de daño`);
    }
  
    defender(): void {
      console.log(`${this.nombre} se protege con su magia.`);
    }
  }