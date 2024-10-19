import { Personaje } from "./personajes";

export class Juego {
    private personajes: Personaje[];
  
    constructor() {
      this.personajes = [];
    }
  
    agregarPersonaje(personaje: Personaje): void {
      this.personajes.push(personaje);
    }
  
    iniciarJuego(): void {
      this.personajes.forEach((personaje) => {
        personaje.atacar();
        personaje.defender();
      });
    }
  }
  