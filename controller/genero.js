import  Express  from "express";
import conx from './../config/db.js';
const router = Express();

router.get('',(req, res)=>{
    res.send({"Message":"Estamos en genero"});
})


export default router;