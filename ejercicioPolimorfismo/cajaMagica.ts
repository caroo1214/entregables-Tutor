

export class CajaMagica {
    private habilidades: string[];
  
    constructor() {
      this.habilidades = ["Disparo de hielo que congela", "Flecha de fuego", "disparo con rayo laser"];
    }
  
    abrir(): string {
      const indice = Math.floor(Math.random() * this.habilidades.length);
      return this.habilidades[indice];
    }
  }
  
  