var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
/*
{
    "id_cam_pruducto":1,
    "fk_id_campesino":2,
    "fk_id_producto":1,
    "precio_unitario":1
}
*/
export class Campe_productos {
    constructor(id_cam_pruducto, fk_id_campesino, fk_id_producto, precio_unitario) {
        this.id_cam_pruducto = id_cam_pruducto;
        this.fk_id_campesino = fk_id_campesino;
        this.fk_id_producto = fk_id_producto;
        this.precio_unitario = precio_unitario;
    }
}
__decorate([
    Expose({ name: 'id_cam_pruducto' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro id_cam_pruducto no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Campe_productos.prototype, "id_cam_pruducto", void 0);
__decorate([
    Expose({ name: 'fk_id_campesino' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro fk_id_campesino no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Campe_productos.prototype, "fk_id_campesino", void 0);
__decorate([
    Expose({ name: 'fk_id_producto' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro fk_id_producto no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Campe_productos.prototype, "fk_id_producto", void 0);
__decorate([
    Expose({ name: 'precio_unitario' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro precio_unitario no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Campe_productos.prototype, "precio_unitario", void 0);
