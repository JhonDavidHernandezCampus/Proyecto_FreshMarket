import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import jwt from './../controller/jwt.js';
import { Genero } from './../controllerDTO/genero.js';

const proxyGenero = express();

proxyGenero.use(jwt.validartoken,(req,res, next)=>{
    try {
        if(!req.body.nombre_genero){
            res.status(400).send({"Error":"El parametro nombre_genero debe ser obligatorio"})
        }else{
            let data = plainToClass(Genero,req.body, {excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(data));
            console.log(req.body);
            next();
        }
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyGenero;