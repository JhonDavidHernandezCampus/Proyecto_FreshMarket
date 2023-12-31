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
import { IsNumber } from "class-validator";
export class ValidaId {
    constructor(id_eliminar) {
        this.id_eliminar = id_eliminar;
    }
}
__decorate([
    Expose({ name: 'id_eliminar' }),
    IsNumber(),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return value;
        else
            throw { status: 400, message: "El parametro pasado como id no cumple con los requisitos necesarios" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], ValidaId.prototype, "id_eliminar", void 0);
