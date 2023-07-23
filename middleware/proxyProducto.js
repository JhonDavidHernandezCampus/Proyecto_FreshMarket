import Express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Productos } from './../controllerDTO/productos.js';
import jwt from './../controller/jwt.js';

const proxyProducto = Express();

proxyProducto.use(jwt.validartoken,(req,res,next)=>{
    try {
        let data = plainToClass(Productos, req.body, {excludeExtraneousValues:true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyProducto;