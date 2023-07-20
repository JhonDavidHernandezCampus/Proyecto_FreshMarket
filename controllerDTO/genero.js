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
import { IsString } from "class-validator";
export class Genero {
    constructor(nombre_genero, id_genero) {
        this.nombre_genero = nombre_genero;
        this.id_genero = id_genero;
    }
}
__decorate([
    Expose({ name: 'id_genero' }),
    Transform(({ value }) => {
        if (value === undefined)
            return value;
        if (/^[0-9]+$/.test(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: "El dato id_genero no cumple con los parametros establesidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Genero.prototype, "id_genero", void 0);
__decorate([
    Expose({ name: 'nombre_genero' }),
    IsString({ message: "El parametro nombre_genero debe ser obligatorio" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "El parametro nombre_genero no cumple con los parametros establesidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Genero.prototype, "nombre_genero", void 0);
