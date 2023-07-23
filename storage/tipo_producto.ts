import { Expose,Transform,Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class Tipo_Producto{
    @Expose({name: 'id_tipo_producto'})
    @Transform(
        ({ value })=>{
            if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
            else throw {status:400, Message: "El parametro id_tipo_producto no cumple con los parametros requeridos, debe ser (entero)"};
        },{toClassOnly: true})
    id_tipo_producto:number;

    @Expose({name: 'nombre_tipo_producto'})
    @Transform(
    ({value})=>{if(/^[a-zA-Z]+$/.test(value)) return value; else throw {status:400, Message: "El parametro nombre_tipo_producto no cumple con los parametros requeridos, debe ser (string)"};
    },{toClassOnly: true})
    nombre_tipo_producto:string;

    @Expose({name: 'descripcion_tipo_producto'})
    @Transform(
    ({value})=>{if(/^[a-z A-Z]*$/.test(value)) return value; else throw {status:400, Message: "El parametro descripcion_tipo_producto no cumple con los parametros requeridos, debe ser (string)"};
    },{toClassOnly: true})
    descripcion_tipo_producto:string;


    constructor(
        id_tipo_producto:number,
        nombre_tipo_producto:string,
        descripcion_tipo_producto:string
    ){
        this.id_tipo_producto = id_tipo_producto;
        this.nombre_tipo_producto = nombre_tipo_producto;
        this.descripcion_tipo_producto = descripcion_tipo_producto;
    }
}