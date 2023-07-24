import { Expose, Transform, Type } from "class-transformer";
import { IsOptional } from "class-validator";

/* 
{
    "id_pedido":2,
    "cantidad":""
    "fk_id_productos":"",
    "fk_id_comprador":""
}
 */


export class Pedidos {
    @Expose({ name: 'id_pedido' })
    @Transform(
        ({ value }) => {
            if (Math.floor(value) && typeof value === 'number') return Math.floor(value);
            else throw { status: 400, Message: "El parametro id_pedido no cumple con los parametros requeridos, debe ser (entero)" };
        }, { toClassOnly: true })
    id_pedido: number;

    @Expose({ name: 'cantidad' })
    @Transform(
        ({ value }) => {
            if (Math.floor(value) && typeof value === 'number') return Math.floor(value);
            else throw { status: 400, Message: "El parametro cantidad no cumple con los parametros requeridos, debe ser (entero)" };
        }, { toClassOnly: true })
    cantidad: number;

    @Expose({ name: 'fk_id_productos' })
    @Transform(
        ({ value }) => {
            if (Math.floor(value) && typeof value === 'number') return Math.floor(value);
            else throw { status: 400, Message: "El parametro fk_id_productos no cumple con los parametros requeridos, debe ser (entero)" };
        }, { toClassOnly: true })
        fk_id_productos: number;

    @Expose({ name: 'fk_id_comprador' })
    @Transform(
        ({ value }) => {
            if (Math.floor(value) && typeof value === 'number') return Math.floor(value);
            else throw { status: 400, Message: "El parametro id_pedido no cumple con los parametros requeridos, debe ser (entero)" };
        }, { toClassOnly: true })
        fk_id_comprador: number;

    constructor(
        id_pedido: number,
        cantidad: number,
        fk_id_productos: number,
        fk_id_comprador: number
    ) {
        this.id_pedido = id_pedido;
        this.cantidad = cantidad;
        this.fk_id_productos = fk_id_productos;
        this.fk_id_comprador = fk_id_comprador
    }
}