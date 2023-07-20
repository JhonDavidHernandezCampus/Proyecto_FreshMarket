import express from 'express';
import ControllerUsuario from './../controller/usuario.js';
import ControllerGenero from '../controller/genero.js';
const Routes = express.Router();

Routes.use('/usuario', ControllerUsuario);
Routes.use('/genero', ControllerGenero);

export default Routes;