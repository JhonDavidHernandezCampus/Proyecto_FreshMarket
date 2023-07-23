import Express  from "express";
import conx from "../config/db.js";
import jwt from './../controller/jwt.js';
import proxyTipo from "../middleware/proxyTipoProducto.js";

const router = Express();

router.get('',jwt.validartoken,(req,res)=>{

    let query = `SELECT * FROM tipo_producto`;
    conx.query(query,(err,respuesta,fil)=>{
        if (err) {
            console.log({ "Message": "Error al mostrar los datos", "Error": err });
            res.send({ "Message": "Error al mostrar los datos", "Error": err });
        }else{
            res.send(respuesta);
        }
    })
});

/* 
{
    "id_tipo_producto":2,
    "nombre_tipo_producto":"arbeja",
    "descripcion_tipo_producto":"Es verde y bonita"
} 
*/


router.post('',proxyTipo,(req,res)=>{
    let params = req.body;
    let query = `INSERT INTO tipo_producto SET ?`;
    conx.query(query, params, (err, respuesta,fil)=>{
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "El tipo de producto ya existe", "Error": err });
                res.send({ "Message": `El tipo de producto con id ${params.id_tipo_producto} ya existe` });
            } else {
                console.log({ "Message": "Error al insertar los datos", "Error": err });
                res.send({ "Message": "Error al insertar los datos", "Error": err });
            }
        } else {
                console.log({ "Message": "Los datos se Insertaron correctamente", "Status": 200 });
                res.send({ "Message": "Los datos se Insertaron correctamente", "Status": 200 });
        }
    })
    console.log(params);
})


/* 
{
    "id_eliminar":123
}
*/
router.delete('', (req, res) => {
    let params = req.body;
    let query = `DELETE FROM tipo_producto WHERE  id_tipo_producto = ${params.id_eliminar}`;
    conx.query(query, (err, respuesta, fil) => {
        if (err || (respuesta.affectedRows === 0)) {
            if (respuesta.affectedRows === 0) {
                console.log({ "Message": "`El tipo de producto no existe`", "Error": err });
                res.send({ "Message": `El tipo de producto con id ${params.id_eliminar} no existe` });
            } else {
                console.log({ "Message": "Error al eliminar los datos", "Error": err });
                res.send({ "Message": "Error al eliminar los datos", "Error": err });
            }
        } else {
            res.send({ status: 200, Message: `Se ha eliminado al usuario campesino con el id ${params.id_eliminar}` });
        }
    });
})



export default router;