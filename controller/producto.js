import Express  from "express";
import conx from "../config/db.js";
import jwt from './../controller/jwt.js';
import proxyProducto from "../middleware/proxyProducto.js";

const router = Express();

router.get('',jwt.validartoken,(req,res)=>{
    let query = `SELECT * FROM producto`
    conx.query(query, (err,respuesta,fil)=>{
        if (err) {
            console.log({ "Message": "Error al mostrar los productos", "Error": err });
            res.send({ "Message": "Error al mostrar los productos", "Error": err });
        }else{
            res.send(respuesta);
        }
    })
})

/* 
{
    "id_producto":1,
    "nombre_producto":"",
    "descripcion":"",
    "fk_id_tipo":1
}
*/

router.post('',proxyProducto,(req,res)=>{
    let parametros = req.body;
    let query = `INSERT INTO producto SET ?`
    conx.query(query,parametros,(err,respuesta,fil)=>{
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "Error, producto con ese id ya existe", "Error": err });
                res.send({ "Message": "Error, producto con ese id ya existe" });
            }else{
                console.log({ "Message": "Error al insertar el productos", "Error": err });
                res.send({ "Message": "Error al insertar el producto", "Error": err });

            }
        }else{
            res.send({status:200, Message:"La data se ha insertado correctamente"});
        }
    })
})

router.delete('/:id_producto',(req, res)=>{
    let params = req.params.id_producto;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        let query = `DELETE FROM producto WHERE id_producto = ${params}`;
        console.log(query);
        conx.query(query,(err,respuesta,fil)=>{
            
            if (err || respuesta.affectedRows === 0) {
                if(respuesta.affectedRows === 0){
                    console.log({ "Message": "Error el producto no existe"});
                    res.send({ "Message": `Error el producto con id ${params} no existe` });
                }else{
                    console.log({ "Message": "Error al eliminar el  producto", "Error": err });
                    res.send({ "Message": "Error al eliminar el  producto", "Error": err });
                }
            }else{
                res.send({status:200, Message: "La data se ha eliminado correctamente"});
            }
        })
    }
})

export default router;
