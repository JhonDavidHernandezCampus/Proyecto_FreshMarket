import Express from "express";
import conx from './../config/db.js';
import proxyUsuario from "../middleware/proxyUsuarios.js";
const router = Express();




router.get('/mostrar/:id', (req, res) => {
    let params = req.params.id;
    conx.query(`SELECT * FROM comprador WHERE fk_id_usuario = ${params};
                SELECT * FROM campesino WHERE fk_id_usuario = ${params}`,
        (err, respuesta, fil) => {
            if (err || (respuesta[0].length === 0 && respuesta[1].length === 0)) {
                if (respuesta[0].length === 0 && respuesta[1].length === 0) {
                    console.log({ "Message": "El usuario no existe" });
                    res.send({ "Message": `El usuario con id ${params} no existe` });
                } else {
                    console.log({ "Message": "Error al mostrar los datos", "Error": err });
                    res.send({ "Message": "Error al mostrar los datos", "Error": err });
                }
            } else {
                conx.query(`SELECT * FROM comprador WHERE fk_id_usuario = ${params}`, (err, resp, fil) => {
                    console.log(resp, "busvame en la consola");
                    if (err) {
                        console.log({ "Message": "Error al validar linea 26 de usuario.js", "Error": err });
                        res.send({ "Message": "Error al validar linea 26 de usuario.js", "Error": err });
                    } else {
                        if (resp.length === 1) {
                            let query = `SELECT * 
                                    FROM usuario u INNER JOIN comprador c
                                    ON u.id_usuario = c.fk_id_usuario
                                    WHERE id_usuario = ${params}`
                            conx.query(query, (err, respues, fil) => {
                                if (err) {
                                    res.send({ status: 400, Message: "Ha ocurrido un error al hacer la busqueda de datos" })
                                } else {
                                    res.send(respues);
                                }
                            })
                        } else {
                            let query = `SELECT * 
                                    FROM usuario u INNER JOIN campesino c
                                    ON u.id_usuario = c.fk_id_usuario
                                    WHERE id_usuario = ${params}`
                            conx.query(query, (err, respues, fil) => {
                                if (err) {
                                    res.send({ status: 400, Message: "Ha ocurrido un error al hacer la busqueda de datos" })
                                } else {
                                    res.send(respues);
                                }
                            })
                        }
                    }
                })
            }
        })
});
/* 
{
    "id_usuario":322, 
    "nombre_usuario":"CarAlmeida121",
    "email":"jhon@gamil.com",
    "fk_id_genero":1,
    "camp_nombre":"Jhon calos Almeida",
    "camp_direccion":"Floridablanca la casa blanca",
    "camp_telefono":"3224757536",
}
*/
router.post('/insertar/campesino', proxyUsuario, (req, res) => {
    let params = req.body;
    let query = `INSERT INTO usuario(id_usuario,nombre_usuario,email,fk_id_genero) 
                VALUES (${params.id_usuario},'${params.nombre_usuario}','${params.email}',${params.fk_id_genero});
                INSERT INTO campesino(camp_nombre,camp_direccion,camp_telefono,fk_id_usuario) 
                VALUES ('${params.camp_nombre}','${params.camp_direccion}','${params.camp_telefono}',${params.id_usuario})`;
    conx.query(query, (err, resp, fil) => {
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "El usuario ya existe", "Error": err });
                res.send({ "Message": `El usuario con id ${params.id_usuario} ya existe` });
            } else {
                console.log({ "Message": "Error al insertar los datos", "Error": err });
                res.send({ "Message": "Error al insertar los datos", "Error": err });
            }
        } else {
            if (resp.length >= 2) {
                console.log({ "Message": "Los datos se Insertaron correctamente", "Status": 200 });
                res.send({ "Message": "Los datos se Insertaron correctamente", "Status": 200 });
            } else {
                console.log({ "Message": "Error al insertar los datos", "Error": err });
                res.send({ "Message": "Error al insertar los datos", "Error": err });
            }
        }
    })
});
/* 

{
    "id_usuario":322,
    "nombre_usuario":"CarAlmeida121",
    "email":"jhon@gamil.com",
    "fk_id_genero":1,
    "nombre_comprador":"Jhon calos Almeida",
    "compra_direccion":"Floridablanca la casa blanca",
    "compra_telefono":"3224757536"
}

 */
router.post('/insertar/comprador',proxyUsuario, (req, res) => {
    let params = req.body;
    let query = `INSERT INTO usuario(id_usuario,nombre_usuario,email,fk_id_genero) 
                VALUES (${params.id_usuario},'${params.nombre_usuario}','${params.email}',${params.fk_id_genero});
                INSERT INTO comprador(nombre_comprador,compra_direccion,compra_telefono,fk_id_usuario) 
                VALUES ('${params.nombre_comprador}','${params.compra_direccion}','${params.compra_telefono}',${params.id_usuario})`;
    conx.query(query, (err, resp, fil) => {
        if (err) {
            if (err.errno === 1062) {
                console.log({ "Message": "`El usuario ya existe`", "Error": err });
                res.send({ "Message": `El usuario con id ${params.id_usuario} ya existe` });
            } else {
                console.log({ "Message": "Error al insertar los datos", "Error": err });
                res.send({ "Message": "Error al insertar los datos", "Error": err });
            }
        } else {
            if (resp.length >= 2) {
                console.log({ "Message": "Los datos se Insertaron correctamente", "Status": 200 });
                res.send({ "Message": "Los datos se Insertaron correctamente", "Status": 200 });
            } else {
                console.log({ "Message": "Error al insertar los datos", "Error": err });
                res.send({ "Message": "Error al insertar los datos", "Error": err });
            }
        }
    })
});

/* 
{
    "id_eliminar":123
}
*/
router.delete('/eliminar', proxyUsuario, (req, res) => {
    let params = req.body;
    let query = `DELETE FROM campesino WHERE fk_id_usuario = ${params.id_eliminar};
                DELETE FROM comprador WHERE fk_id_usuario = ${params.id_eliminar};
                DELETE FROM usuario WHERE id_usuario = ${params.id_eliminar}`;
    conx.query(query, (err, respuesta, fil) => {
        if (err || (respuesta[0].affectedRows === 0 && respuesta[1].affectedRows === 0)) {
            if (respuesta[0].affectedRows === 0) {
                console.log({ "Message": "`El usuario no existe`", "Error": err });
                res.send({ "Message": `El usuario con id ${params.id_eliminar} no existe` });
            } else {
                console.log({ "Message": "Error al eliminar los datos", "Error": err });
                res.send({ "Message": "Error al eliminar los datos", "Error": err });
            }
        } else {
            res.send({ status: 200, Message: `Se ha eliminado al usuario campesino con el id ${params.id_eliminar}` });
        }
    });
})
/*  
{
    "id_usuario":322, 
    "nombre_usuario":"CarAlmeida121",
    "email":"jhon@gamil.com",
    "fk_id_genero":1,
    "camp_nombre":"Jhon calos Almeida",
    "camp_direccion":"Floridablanca la casa blanca",
    "camp_telefono":"3224757536"
}
*/
router.put('/actualizar/campesino', (req,res)=>{
    let params = req.body;
    let query = `UPDATE usuario SET nombre_usuario='${params.nombre_usuario}', email= '${params.email}', fk_id_genero= ${params.fk_id_genero} 
                WHERE id_usuario= ${params.id_usuario};
                UPDATE campesino SET camp_nombre='${params.camp_nombre}', camp_direccion= '${params.camp_direccion}', camp_telefono= '${params.camp_telefono}' 
                WHERE fk_id_usuario= ${params.id_usuario}`;

    conx.query(`SELECT * FROM usuario WHERE id_usuario = ${params.id_usuario};
                SELECT * FROM campesino WHERE fk_id_usuario = ${params.id_usuario}
    `, (err,respuesta,fil)=>{
        if (err || (respuesta[0].length <=1 && respuesta[1].length === 0) ){
            if (respuesta[0].length === 0 && respuesta[1].length === 0) {
                console.log({estatus:400, Message: "El usuario no existe en actualizar datos"});
                res.send({estatus:400, Message: `El usuario al que desea actualizar no existe con id ${params.id_usuario}`});

            }else if(respuesta[0].length <=1 && respuesta[1].length === 0){
                console.log({estatus:400, Message: "El usuario no es un campesino"});
                res.send({estatus:400, Message: `El usuario al que desea actualizar no es un campesino ${params.id_usuario}`});

            }else{
                console.log({estatus:400, Message: "Error al actualizar los datos"});
                res.send({estatus:400, Message: "Error al actualizar los datos", "Error": err});
            }

        }else{
            conx.query(query, (err,respu, fil)=>{
                if (err) {
                    console.log({estatus:400, Message: "Error al actualizar los datos"});
                    res.send({estatus:400, Message: "Error al actualizar los datos", "Error": err});
                }else{
                    console.log({status:200, Message:"Los datos se an actualizado correctamente"});
                    res.send({status:200, Message:"Los datos se an actualizado correctamente"});
                }
            });

        }
    })
});

/* 
{
    "id_usuario":322,
    "nombre_usuario":"CarAlmeida121",
    "email":"jhon@gamil.com",
    "fk_id_genero":1,
    "nombre_comprador":"Jhon calos Almeida",
    "compra_direccion":"Floridablanca la casa blanca",
    "compra_telefono":"3224757536"
}
*/
router.put('/actualizar/comprador',proxyUsuario,(req,res)=>{
    let params = req.body;
    let query = `UPDATE usuario SET nombre_usuario='${params.nombre_usuario}', email= '${params.email}', fk_id_genero= ${params.fk_id_genero} 
                WHERE id_usuario= ${params.id_usuario};
                UPDATE comprador SET nombre_comprador='${params.nombre_comprador}', compra_direccion= '${params.compra_direccion}', compra_telefono= '${params.compra_telefono}' 
                WHERE fk_id_usuario= ${params.id_usuario}`;
    
    conx.query(`SELECT * FROM usuario WHERE id_usuario = ${params.id_usuario};
                SELECT * FROM comprador WHERE fk_id_usuario = ${params.id_usuario}
    `, (err,respuesta,fil)=>{
        if (err || (respuesta[0].length <=1 && respuesta[1].length === 0) ){
            if (respuesta[0].length === 0 && respuesta[1].length === 0) {
                console.log({estatus:400, Message: "El usuario no existe en actualizar datos"});
                res.send({estatus:400, Message: `El usuario al que desea actualizar no existe con id ${params.id_usuario}`});

            }else if(respuesta[0].length <=1 && respuesta[1].length === 0){
                console.log({estatus:400, Message: "El usuario no es un comprador"});
                res.send({estatus:400, Message: `El usuario al que desea actualizar no es un comprador ${params.id_usuario}`});

            }else{
                console.log({estatus:400, Message: "Error al actualizar los datos"});
                res.send({estatus:400, Message: "Error al actualizar los datos", "Error": err});
            }

        }else{
            conx.query(query, (err,respu, fil)=>{
                if (err) {
                    console.log({estatus:400, Message: "Error al actualizar los datos"});
                    res.send({estatus:400, Message: "Error al actualizar los datos", "Error": err});
                }else{
                    console.log({status:200, Message:"Los datos se an actualizado correctamente"});
                    res.send({status:200, Message:"Los datos se an actualizado correctamente"});
                }
            });

        }
    })
    
});

export default router;
