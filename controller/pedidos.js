import  Express  from "express";
import conx from './../config/db.js';
import jwt from './../controller/jwt.js';
import proxyPedido from "../middleware/proxyPedidos.js";
const router = Express();



router.get('',jwt.validartoken,(req, res)=>{
    let query = `SELECT * FROM pedidos`;
    conx.query(query, (err,respuesta,fil)=>{
        if (err) {
            console.log({ "Message": "Error al mostrar los pedidos", "Error": err });
            res.send({ "Message": "Error al mostrar los pedidos", "Error": err });
        }else{
            res.send(respuesta);
        }
    })
})

/* 
{
    "id_pedido":2,
    "cantidad":""
    "fk_id_productos":"",
    "fk_id_comprador":""
}
*/

router.post('/',proxyPedido,(req, res)=>{
    let parametros = req.body;
    let query = `INSERT INTO pedidos SET ?`
    conx.query(query,parametros,(err,respuesta,fil)=>{
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "Error, pedido ya existe", "Error": err });
                res.send({ "Message": "Error, pedido ya existe" });
            }else{
                console.log({ "Message": "Error al insertar el pedido", "Error": err });
                res.send({ "Message": "Error al insertar el pedido", "Error": err });

            }
        }else{
            res.send({status:200, Message:"La data se ha insertado correctamente"});
        }
    })
})

router.delete('/:id_pedido',jwt.validartoken,(req, res)=>{
    let params = req.params.id_pedido;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        let query = `DELETE FROM pedidos WHERE id_pedido = ${params}`;
        console.log(query);
        conx.query(query,(err,respuesta,fil)=>{
            if (err) {
                console.log({ "Message": "Error al eliminar el  pedido", "Error": err });
                res.send({ "Message": "Error al eliminar el  pedido", "Error": err });
            }else{
                res.send({status:200, Message: "La data se ha eliminado correctamente"});
            }
        })
    }
})


/* 
Data que le envio
{
    "id_pedido":2,
    "cantidad":2,
    "fk_id_productos":1,
    "fk_id_comprador":1
}
 */
router.put('/:id_pedido',proxyPedido,(req, res)=>{
    let params = req.params.id_pedido;
    let query = `UPDATE pedidos SET ? WHERE id_pedido = ?`;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        if(!req.body.id_pedido && !req.body.cantidad && req.body.fk_id_productos && req.body.fk_id_comprador){
            console.log({ "Message": "Error, parametro faltante"});
            res.send({ "Message": "Error, parametro faltante"});
        }else{
            console.log(query);
            conx.query(query, [req.body, req.params.id_pedido], 
            (err, respuesta,fil)=>{
                if (err) {
                    console.log({ "Message": "Error al actualizar el  pedido", "Error": err });
                    res.send({ "Message": "Error al actualizar el  pedido", "Error": err });
                }else{
                    console.log(respuesta);
                    if(respuesta.affectedRows === 0){
                        console.log(respuesta);
                        res.send({status:200, Message: `el pedido con id ${req.params.id_pedido} no existe`});
                    }else{
                        console.log(respuesta);
                        res.send({status:200, Message: "La data se ha actualizado correctamente"});
                    }
                }
            })
        }
    }    
})  

export default router;