import { Motor, Rueda } from "./ruedasMotor";

export class Camion{
    private marca: string;
    private modelo: number;
    private motor: string;
    private ruedas: string;

    constructor(marca: string, modelo:number, motor:string, ruedas:string){
        this.marca = marca;
        this.modelo= modelo;
        this.motor= motor;
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
        nombre= "mercedes benz 1634";
        return nombre;
    }
    setModelo(numero: number):number{
        numero = 2016;
        return numero;
    }
}

const camion =new Camion( "mercedes benz 1634", 2016, "diesel cuatro tiempos 6c en linea", "de caucho" );