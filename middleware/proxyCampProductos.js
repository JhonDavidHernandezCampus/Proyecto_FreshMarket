import Express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Campe_productos } from './../controllerDTO/campeProducto.js';
import jwt from './../controller/jwt.js';

const proxyCampProducto = Express();

proxyCampProducto.use(jwt.validartoken,(req,res,next)=>{
    try {
        let data = plainToClass(Campe_productos, req.body, {excludeExtraneousValues:true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyCampProducto;