import  Express  from "express";
import conx from './../config/db.js';
import proxyCampProducto from "../middleware/proxyCampProductos.js";
import jwt from './../controller/jwt.js';
const router = Express();

/* 


*/
router.get('',jwt.validartoken,(req, res)=>{
    let query = `SELECT * FROM campesino_producto`;
    conx.query(query, (err,respuesta,fil)=>{
        if (err) {
            console.log({ "Message": "Error al mostrar los productos de campesino", "Error": err });
            res.send({ "Message": "Error al mostrar los  productos de campesino", "Error": err });
        }else{
            res.send(respuesta);
        }
    })
})

/* 
{
    "id_cam_pruducto":1,
    "fk_id_campesino":"",
    "fk_id_producto":"",
    "precio_unitario":1
}
*/

router.post('',proxyCampProducto,(req, res)=>{
    let parametros = req.body;
    let query = `INSERT INTO campesino_producto SET ?`
    conx.query(query,parametros,(err,respuesta,fil)=>{
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "Error, capesino_producto ya existe", "Error": err });
                res.send({ "Message": "Error, capesino_producto ya existe" });
            }else{
                console.log({ "Message": "Error al insertar el capesino_producto", "Error": err });
                res.send({ "Message": "Error al insertar el capesino_producto", "Error": err });

            }
        }else{
            res.send({status:200, Message:"La data se ha insertado correctamente"});
        }
    })
})


router.delete('/:id_cam_pruducto',(req, res)=>{
    let params = req.params.id_cam_pruducto;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        let query = `DELETE FROM campesino_producto WHERE id_cam_pruducto = ${params}`;
        console.log(query);
        conx.query(query,(err,respuesta,fil)=>{
            if (err || respuesta.affectedRows === 0) {
                if( respuesta.affectedRows === 0){
                    console.log({ "Message": "Error, El capesino_producto no existe "});
                    res.send({ "Message": "Error, El capesino_producto no existe"});
                }else{
                    console.log({ "Message": "Error al eliminar el  capesino_producto", "Error": err });
                    res.send({ "Message": "Error al eliminar el  capesino_producto", "Error": err });
                }
            }else{
                res.send({status:200, Message: "La data se ha eliminado correctamente"});
            }
        })
    }
})


/* 
Data que le envio
{
    "id_cam_pruducto":1,
    "fk_id_campesino":"",
    "fk_id_producto":"",
    "precio_unitario":1
}
*/
router.put('/:id_cam_pruducto',proxyCampProducto,(req, res)=>{
    let params = req.params.id_cam_pruducto;
    let query = `UPDATE campesino_producto SET ? WHERE id_cam_pruducto = ?`;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        if(!req.body.id_cam_pruducto && !req.body.fk_id_campesino && req.body.fk_id_producto && req.body.precio_unitario){
            console.log({ "Message": "Error, parametro faltante"});
            res.send({ "Message": "Error, parametro faltante"});
        }else{
            console.log(query);
            conx.query(query, [req.body, req.params.id_cam_pruducto], 
            (err, respuesta,fil)=>{
                if (err) {
                    console.log({ "Message": "Error al actualizar el  genero", "Error": err });
                    res.send({ "Message": "Error al actualizar el  genero", "Error": err });
                }else{
                    console.log(respuesta);
                    if(respuesta.affectedRows === 0){
                        console.log(respuesta);
                        res.send({status:200, Message: `el genero con id ${req.params.id_cam_pruducto} no existe`});
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