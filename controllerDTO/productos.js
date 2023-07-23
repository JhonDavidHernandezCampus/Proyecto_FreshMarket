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
export class Productos {
    constructor(id_producto, nombre_producto, descripcion, fk_id_tipo) {
        this.id_producto = id_producto;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.fk_id_tipo = fk_id_tipo;
    }
}
__decorate([
    Expose({ name: 'id_producto' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro id_producto no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Productos.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'nombre_producto' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, Message: "El parametro nombre_producto no cumple con los parametros requeridos, debe ser (string)" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Productos.prototype, "nombre_producto", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]*$/.test(value))
            return value;
        else
            throw { status: 400, Message: "El parametro descripcion no cumple con los parametros requeridos, debe ser (string)" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Productos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'fk_id_tipo' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, Message: "El parametro fk_id_tipo no cumple con los parametros requeridos, debe ser (entero)" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Productos.prototype, "fk_id_tipo", void 0);
