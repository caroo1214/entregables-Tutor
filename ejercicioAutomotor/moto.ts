import { Motor, Rueda } from "./ruedasMotor";

export class Moto{
    private marca: string;
    private modelo: number;
    private motor: string;
    private ruedas: string;

    constructor(marca:string, modelo:number, motor:string, ruedas: string){
        this.marca= marca;
        this.modelo= modelo;
        this.motor= motor 
        this.ruedas= ruedas;
    }

    // getters
    getMarca():string{
        return this.marca;
    }
    getModelo():number{
        return this.modelo;
    }
    getMotor():string{
        return this.motor;
    }
    getRuedas():string{
        return this.ruedas;
    }

    // setters
    setMarca(nombre: string):string{
        nombre = "Honda nx400";
        return nombre;
    }
    setModelo(numero: number):number{
        numero = 2017;
        return numero;
    }
}
const moto = new Moto ("Honda nx400", 2010, "cilindrada de 397.2 cc", "de caucho");