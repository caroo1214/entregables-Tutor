/*export abstract class Personajes{// atributos habilidades que van a tener
    protected nombre:string;
    protected vida:number=100;
    protected velocidad:number;
    protected resistencia:number;
    protected fuerza:number;
   // protected sabiduria:number
    //protected magia: string
  
  //  protected agilidad :number


constructor (nombre:string, vida:number, velocidad:number,resistencia:number, fuerza:number){
    this.nombre=nombre;
    this.vida=vida;
    this.velocidad=velocidad; 
    this.resistencia=resistencia;
    this.fuerza=fuerza;
}
//metodos

 public atacarOponente():void{
    return console.log("ataca al oponente");
 }


    
public defenderse():void{
    return console.log("se esta defendiendo del enemigo")
}


public tirarHechizo():void{
    return console.log("hechizo")
    
}

}*/

export abstract class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected salud: number=100;
    protected fuerza: number;
  
    constructor(nombre: string, nivel:number,salud: number, fuerza: number) {
      this.nombre = nombre;
      this.nivel= nivel;
      this.salud = salud;
      this.fuerza = fuerza;
    }
  
    abstract atacar(): void;
    abstract defender(): void;
  
    getNombre(): string {
      return this.nombre;
    }
  
    getSalud(): number {
      return this.salud;
    }
  
    setSalud(salud: number): void {
      this.salud = salud;
    }
    getNivel(): number {
        return this.nivel;
      }
    
    setNivel(nivel: number): void {
        this.nivel = nivel;
      }
    getFuerza(): number {
        return this.fuerza;
      }
    
    setFuerza(fuerza: number): void {
        this.fuerza= fuerza;
      }
  }
  