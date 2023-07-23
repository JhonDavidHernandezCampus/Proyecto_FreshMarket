import Express  from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Tipo_Producto} from './../controllerDTO/tipo_producto.js';
import jwt from './../controller/jwt.js';

const proxyTipo = Express();

proxyTipo.use(jwt.validartoken,(req,res,next)=>{
    try {
        let data = plainToClass(Tipo_Producto, req.body,{excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data))
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyTipo;
