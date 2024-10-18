import { Personajes } from "./personajes";


export class Luchador extends Personajes {
    private arma: string;
  
    constructor(nombre: string, nivel:number, salud: number, fuerza: number, arma: string) {
      super(nombre,nivel, salud, fuerza);
      this.arma = arma;
    }
  
    atacar(): void {
      console.log(`${this.nombre} ataca con ${this.arma} a El Mago Gandalf y causa ${this.fuerza} de daño`);
    }
  
    defender(): void {
      console.log(`${this.nombre} se defiende con su escudo.`);
    }

  getArma(): string{
      return this.arma;
    }
  
  setArma(arma: string): void {
      this.arma = arma;
    }
  }