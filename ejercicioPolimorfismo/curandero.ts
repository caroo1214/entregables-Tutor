import { Personaje } from "./personajes";

export class Curandero extends Personaje {
  private poción: string;

  constructor(nombre: string, nivel:number, salud: number, fuerza: number, poción: string) {
    super(nombre, nivel, salud, fuerza);
    this.poción = poción;
  }

  atacar(): void {
    console.log(`${this.nombre} lanza ${this.poción} y restaura salud a aliados`);
  }

  defender(): void {
    console.log(`${this.nombre} se protege con escudo mágico.`);
  }
}
