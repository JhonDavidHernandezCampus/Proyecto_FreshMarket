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
export class Tipo_Producto {
    constructor(id_tipo_producto, nombre_tipo_producto, descripcion_tipo_producto) {
        this.id_tipo_producto = id_tipo_producto;
        this.nombre_tipo_producto = nombre_tipo_producto;
        this.descripcion_tipo_producto = descripcion_tipo_producto;
    }
}
__decorate([
    Expose({ name: 'id_tipo_producto' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro id_tipo_producto no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Tipo_Producto.prototype, "id_tipo_producto", void 0);
__decorate([
    Expose({ name: 'nombre_tipo_producto' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, Message: "El parametro nombre_tipo_producto no cumple con los parametros requeridos, debe ser (string)" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Tipo_Producto.prototype, "nombre_tipo_producto", void 0);
__decorate([
    Expose({ name: 'descripcion_tipo_producto' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]*$/.test(value))
            return value;
        else
            throw { status: 400, Message: "El parametro descripcion_tipo_producto no cumple con los parametros requeridos, debe ser (string)" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Tipo_Producto.prototype, "descripcion_tipo_producto", void 0);
