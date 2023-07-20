import { Expose, Transform, Type } from "class-transformer"; 
import { IsNumber, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class Genero{
    @Expose({name: 'id_genero'})
    @Transform(
        ({ value })=>{if(value === undefined) return value;
            if(/^[0-9]+$/.test(value) && typeof value === 'number') return Math.floor(value);
        else throw { status: 400, message: "El dato id_genero no cumple con los parametros establesidos"};
    },{toClassOnly: true})
    id_genero?:number;


    @Expose({name: 'nombre_genero'})
    @IsString({message: "El parametro nombre_genero debe ser obligatorio"})
    @Transform(
        ({ value })=>{
        if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:"El parametro nombre_genero no cumple con los parametros establesidos"};
    },{toClassOnly:true})
    nombre_genero:string;

    constructor(
        nombre_genero:string,
        id_genero?:number,
    ){
        this.nombre_genero = nombre_genero;
        this.id_genero = id_genero;
    }
}