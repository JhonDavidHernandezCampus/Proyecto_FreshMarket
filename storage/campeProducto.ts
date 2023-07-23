import {Expose, Type , Transform} from 'class-transformer';
import {  IsString, IsNotEmpty, Matches,IsEmail, IsNumber } from 'class-validator';

/* 
{
    "id_cam_pruducto":1,
    "fk_id_campesino":2,
    "fk_id_producto":1,
    "precio_unitario":1
}
*/


export class Campe_productos{
        @Expose({name: 'id_cam_pruducto'})
        @Transform(
            ({ value })=>{
                if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
                else throw {status:400, Message: "El parametro id_cam_pruducto no cumple con los parametros requeridos, debe ser (entero)"};
            },{toClassOnly: true})
        id_cam_pruducto:number;
    
        @Expose({name: 'fk_id_campesino'})
        @Transform(
            ({ value })=>{
                if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
                else throw {status:400, Message: "El parametro fk_id_campesino no cumple con los parametros requeridos, debe ser (entero)"};
            },{toClassOnly: true})
        fk_id_campesino:number;
    
        @Expose({name: 'fk_id_producto'})
        @Transform(
            ({ value })=>{
                if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
                else throw {status:400, Message: "El parametro fk_id_producto no cumple con los parametros requeridos, debe ser (entero)"};
            },{toClassOnly: true})
        fk_id_producto:number;
    
        @Expose({name: 'precio_unitario'})
        @Transform(
            ({ value })=>{
                if(Math.floor(value) && typeof value === 'number') return Math.floor(value);
                else throw {status:400, Message: "El parametro precio_unitario no cumple con los parametros requeridos, debe ser (entero)"};
            },{toClassOnly: true})
            precio_unitario:number;
        
        constructor(
            id_cam_pruducto:number,
            fk_id_campesino:number,
            fk_id_producto:number,
            precio_unitario:number
        ){
            this.id_cam_pruducto = id_cam_pruducto;
            this.fk_id_campesino = fk_id_campesino;
            this.fk_id_producto = fk_id_producto;
            this.precio_unitario = precio_unitario;
        }
    
}