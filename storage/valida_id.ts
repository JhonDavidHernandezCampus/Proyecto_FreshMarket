import { Expose, Transform, Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class ValidaId{
    @Expose({name: 'id_eliminar'})
    @IsNumber()
    @Transform(
        ({ value })=>{
            if(Math.floor(value) && typeof value === 'number') return value; else throw {status:400, message: "El parametro pasado como id no cumple con los requisitos necesarios"};
        },{toClassOnly: true})
    id_eliminar:number;

    constructor(
        id_eliminar:number,
    ){
        this.id_eliminar= id_eliminar;
    }
}