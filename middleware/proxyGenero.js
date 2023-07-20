import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Genero } from './../controllerDTO/genero.js';

const proxyGenero = express();

proxyGenero.use((req,res, next)=>{
    try {
        console.log(req.body);
        let data = plainToClass(Genero,req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        console.log(req.body);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyGenero;