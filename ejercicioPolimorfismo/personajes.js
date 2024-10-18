"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    function Personajes(nombre, nivel, salud, fuerza) {
        this.salud = 100;
        this.nombre = nombre;
        this.nivel = nivel;
        this.salud = salud;
        this.fuerza = fuerza;
    }
    Personajes.prototype.getNombre = function () {
        return this.nombre;
    };
    Personajes.prototype.getSalud = function () {
        return this.salud;
    };
    Personajes.prototype.setSalud = function (salud) {
        this.salud = salud;
    };
    Personajes.prototype.getNivel = function () {
        return this.nivel;
    };
    Personajes.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personajes.prototype.getFuerza = function () {
        return this.fuerza;
    };
    Personajes.prototype.setFuerza = function (fuerza) {
        this.fuerza = fuerza;
    };
    return Personajes;
}());
exports.Personajes = Personajes;
