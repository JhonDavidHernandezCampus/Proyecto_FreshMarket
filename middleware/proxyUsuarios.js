import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import { Usuarios } from './../controllerDTO/usuarios.js';
import { ValidaId } from './../controllerDTO/valida_id.js';
import jwt from './../controller/jwt.js';
const proxyUsuario = express();

proxyUsuario.use(jwt.validartoken,(req,res,next)=>{
    if (!req.body.id_eliminar) {
        try {
            let data = plainToClass(Usuarios , req.body, {excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(data));
            next();
        } catch (error) {
            res.status(error.status).send(error);
        }
    }else{
        try {
            let data = plainToClass(ValidaId, req.body, {excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(data));
            next();
        } catch (error) {
            res.status(error.status).send(error);
        }

    }
    
})

export default proxyUsuario;
