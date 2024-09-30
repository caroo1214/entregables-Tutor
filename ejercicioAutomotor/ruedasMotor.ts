export class Motor{
    private tipo: string;
    private color: string;

    constructor (tipo: string, color: string){
        this.tipo = tipo;
        this.color = color;
    }
}
export class Rueda{
    private color: string;
    private material: string;

    constructor(color: string, material: string){
        this.color= color;
        this.material = material;
    }
}