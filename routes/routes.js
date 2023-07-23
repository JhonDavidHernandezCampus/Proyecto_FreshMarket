import express from 'express';
import ControllerUsuario from './../controller/usuario.js';
import ControllerGenero from '../controller/genero.js';
import ControllerJwt from '../controller/jwt.js';
import ControllerTipo from './../controller/tipo_producto.js';
import ControllerProducto from './../controller/producto.js';
import ControllerCampesinoProducto  from './../controller/campeProducto.js';

const Routes = express.Router();

Routes.use('/usuario', ControllerUsuario);
Routes.use('/genero', ControllerGenero);
Routes.use('/token', ControllerJwt.jwt);
Routes.use('/tipproducto', ControllerTipo);
Routes.use('/producto', ControllerProducto);
Routes.use('/campesinoproducto', ControllerCampesinoProducto);


export default Routes;