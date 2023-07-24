import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import jwt from './../controller/jwt.js';
import { Pedidos } from './../controllerDTO/pedidos.js';

const proxyPedido= express();

proxyPedido.use(jwt.validartoken,(req,res, next)=>{
    let params = req.body;
    try {
        if(!params.id_pedido && params.cantidad && params.fk_id_productos && params.fk_id_comprador){
            res.status(400).send({"Error":"El parametros mal o incompletos"})
        }else{
            let data = plainToClass(Pedidos ,req.body, {excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(data));
            console.log(req.body);
            next();
        }
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyPedido;