import  Express  from "express";
import conx from './../config/db.js';
import proxyGenero from "../middleware/proxyGenero.js";
const router = Express();

/* 
{
    "id_genero":12 //opcional
    "nombre_genero":"MedioMujer"
}
*/
router.get('/',(req, res)=>{
    let query = `SELECT * FROM genero`;
    conx.query(query, (err,respuesta,fil)=>{
        if (err) {
            console.log({ "Message": "Error al mostrar los generos", "Error": err });
            res.send({ "Message": "Error al mostrar los generos", "Error": err });
        }else{
            res.send(respuesta);
        }
    })
})

/* 
{
    "id_genero":2,
    "nombre_genero":"MedioMujer"
}
*/

router.post('/',proxyGenero,(req, res)=>{
    let parametros = req.body;
    let query = `INSERT INTO genero SET ?`
    conx.query(query,parametros,(err,respuesta,fil)=>{
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "Error, genero ya existe", "Error": err });
                res.send({ "Message": "Error, Genero ya existe" });
            }else{
                console.log({ "Message": "Error al insertar los generos", "Error": err });
                res.send({ "Message": "Error al insertar los generos", "Error": err });

            }
        }else{
            res.send({status:200, Message:"La data se ha insertado correctamente"});
        }
    })
})

router.delete('/:id_genero',(req, res)=>{
    let params = req.params.id_genero;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        let query = `DELETE FROM genero WHERE id_genero = ${params}`;
        console.log(query);
        conx.query(query,(err,respuesta,fil)=>{
            if (err) {
                console.log({ "Message": "Error al eliminar el  genero", "Error": err });
                res.send({ "Message": "Error al eliminar el  genero", "Error": err });
            }else{
                res.send({status:200, Message: "La data se ha eliminado correctamente"});
            }
        })
    }
})


/* 
Data que le envio
{
    "id_genero":2,
    "nombre_genero":"MedioMujer"
}
 */
router.put('/:id_genero',proxyGenero,(req, res)=>{
    let query = `UPDATE genero SET ? WHERE id_genero = ?`;
    if (isNaN(Number(params))) {
        console.log({ "Message": "Error,  Parametros no cumplen con lo espesificado"});
        res.send({ "Message": "Error, Parametros no cumplen con lo espesificado"});
    }else{
        if(!req.body.id_genero && !req.body.nombre_genero){
            console.log({ "Message": "Error, parametro faltante"});
            res.send({ "Message": "Error, parametro faltante"});
        }else{
            console.log(query);
            conx.query(query, [req.body, req.params.id_genero], 
            (err, respuesta,fil)=>{
                if (err) {
                    console.log({ "Message": "Error al actualizar el  genero", "Error": err });
                    res.send({ "Message": "Error al actualizar el  genero", "Error": err });
                }else{
                    console.log(respuesta);
                    if(respuesta.affectedRows === 0){
                        console.log(respuesta);
                        res.send({status:200, Message: `el genero con id ${req.params.id_genero} no existe`});
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