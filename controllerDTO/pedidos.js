var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
/*
{
    "id_pedido":2,
    "cantidad":""
    "fk_id_productos":"",
    "fk_id_comprador":""
}
 */
export class Pedidos {
    constructor(id_pedido, cantidad, fk_id_productos, fk_id_comprador) {
        this.id_pedido = id_pedido;
        this.cantidad = cantidad;
        this.fk_id_productos = fk_id_productos;
        this.fk_id_comprador = fk_id_comprador;
    }
}
__decorate([
    Expose({ name: 'id_pedido' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro id_pedido no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Pedidos.prototype, "id_pedido", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro cantidad no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Pedidos.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'fk_id_productos' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro fk_id_productos no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Pedidos.prototype, "fk_id_productos", void 0);
__decorate([
    Expose({ name: 'fk_id_comprador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro id_pedido no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Pedidos.prototype, "fk_id_comprador", void 0);
