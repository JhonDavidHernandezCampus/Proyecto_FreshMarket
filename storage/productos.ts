import {Expose, Type , Transform} from 'class-transformer';
import {  IsString, IsNotEmpty, Matches,IsEmail, IsNumber } from 'class-validator';

export class Productos{
        @Expose({name: 'id_producto'})
        @Transform(
            ({ value })=>{
                if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
                else throw {status:400, Message: "El parametro id_producto no cumple con los parametros requeridos, debe ser (entero)"};
            },{toClassOnly: true})
        id_producto:number;
    
        @Expose({name: 'nombre_producto'})
        @Transform(
        ({value})=>{if(/^[a-zA-Z]+$/.test(value)) return value; else throw {status:400, Message: "El parametro nombre_producto no cumple con los parametros requeridos, debe ser (string)"};
        },{toClassOnly: true})
        nombre_producto:string;
    
        @Expose({name: 'descripcion'})
        @Transform(
        ({value})=>{if(/^[a-z A-Z]*$/.test(value)) return value; else throw {status:400, Message: "El parametro descripcion no cumple con los parametros requeridos, debe ser (string)"};
        },{toClassOnly: true})
        descripcion:string;
    
        @Expose({name: 'fk_id_tipo'})
        @Transform(
            ({ value })=>{
                if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
                else throw {status:400, Message: "El parametro fk_id_tipo no cumple con los parametros requeridos, debe ser (entero)"};
            },{toClassOnly: true})
        fk_id_tipo:number;
        
        constructor(
            id_producto:number,
            nombre_producto:string,
            descripcion:string,
            fk_id_tipo:number
        ){
            this.id_producto = id_producto;
            this.nombre_producto = nombre_producto;
            this.descripcion = descripcion;
            this.fk_id_tipo = fk_id_tipo;
        }
    
}