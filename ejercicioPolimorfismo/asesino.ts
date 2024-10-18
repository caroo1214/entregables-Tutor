import { Personajes } from "./personajes";

export class Asesino extends Personajes {
    private veneno: string;
  
    constructor(nombre: string, nivel:number, salud: number, fuerza: number, veneno: string) {
      super(nombre,nivel, salud, fuerza);
      this.veneno = veneno;
    }
  
    atacar(): void {
      console.log(`${this.nombre} ataca con daga envenenada ${this.veneno} al Arquero Charles y causa ${this.fuerza} de daño`);
    }
  
    defender(): void {
      console.log(`${this.nombre} se hace invisible.`);
    }
  }
  
  