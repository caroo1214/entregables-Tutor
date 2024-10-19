import { Personaje } from "./personajes";
import { CajaMagica } from "./cajaMagica";


export class Arquero extends Personaje {
      private arco: string;
      private habilidades: string[];
    
      constructor(nombre: string, nivel:number,salud: number, fuerza: number, arco: string) {
        super(nombre, nivel, salud, fuerza);
        this.arco = arco;
        this.habilidades = ["Disparo rápido", "Flecha envenenada"];
      }
    
      atacar(): void {
        console.log(`${this.nombre} dispara flecha con ${this.arco} a Raider, el Asesino y causa ${this.fuerza} de daño`);
      }
    
      defender(): void {
        console.log(`${this.nombre} se esconde detrás de un árbol.`);
      }
    
      encontrarCajaMagica(): void {
        const cajaMagica = new CajaMagica();

        const nuevaHabilidad = cajaMagica.abrir();
        this.habilidades.push(nuevaHabilidad);
        console.log(`${this.nombre} ha encontrado una caja mágica y ha aprendido ${nuevaHabilidad}`);
      }
    
      mostrarHabilidades(): void {
        console.log(`${this.nombre} tiene las siguientes habilidades:`);
        this.habilidades.forEach((habilidad) => {
          console.log(`- ${habilidad}`);
        });
        
      }
    }