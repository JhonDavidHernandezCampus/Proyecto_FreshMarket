import  Express  from "express";
import conx from './../config/db.js';
const router = Express();

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
router.post('/insertar/campesino',(req,res)=>{
    let params = req.body;
    let query = `INSERT INTO usuario(id_usuario,nombre_usuario,email,fk_id_genero) 
                VALUES (${params.id_usuario},'${params.nombre_usuario}','${params.email}',${params.fk_id_genero});
                INSERT INTO campesino(camp_nombre,camp_direccion,camp_telefono,fk_id_usuario) 
                VALUES ('${params.camp_nombre}','${params.camp_direccion}','${params.camp_telefono}',${params.id_usuario})`;
    conx.query(query, (err,resp, fil)=>{
        if(err){
            if (err.errno === 1062) {
                console.log({"Message":"El usuario ya existe", "Error":err});
                res.send({"Message":"El usuario ya existe", "Error":err});
            }else{
                console.log({"Message":"Error al insertar los datos", "Error":err});
                res.send({"Message":"Error al insertar los datos", "Error":err});
            }
        }else{
            if(resp.length >=2){
                console.log({"Message":"Los datos se Insertaron correctamente", "Status":200});
                res.send({"Message":"Los datos se Insertaron correctamente", "Status":200});
            }else{
                console.log({"Message":"Error al insertar los datos", "Error":err});
                res.send({"Message":"Error al insertar los datos", "Error":err});
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
    "compra_telefono":"3224757536",
}

 */
router.post('/insertar/comprador',(req,res)=>{
    let params = req.body;
    let query = `INSERT INTO usuario(id_usuario,nombre_usuario,email,fk_id_genero) 
                VALUES (${params.id_usuario},'${params.nombre_usuario}','${params.email}',${params.fk_id_genero});
                INSERT INTO comprador(nombre_comprador,compra_direccion,compra_telefono,fk_id_usuario) 
                VALUES ('${params.nombre_comprador}','${params.compra_direccion}','${params.compra_telefono}',${params.id_usuario})`;
    conx.query(query, (err,resp, fil)=>{
        if(err){
            if (err.errno === 1062) {
                console.log({"Message":"`El usuario ya existe`", "Error":err});
                res.send({"Message":`El usuario con id ${params.id_usuario} ya existe`});
            }else{
                console.log({"Message":"Error al insertar los datos", "Error":err});
                res.send({"Message":"Error al insertar los datos", "Error":err});
            }
        }else{
            if(resp.length >=2){
                console.log({"Message":"Los datos se Insertaron correctamente", "Status":200});
                res.send({"Message":"Los datos se Insertaron correctamente", "Status":200});
            }else{
                console.log({"Message":"Error al insertar los datos", "Error":err});
                res.send({"Message":"Error al insertar los datos", "Error":err});
            }
        }
    })
});




export default router;