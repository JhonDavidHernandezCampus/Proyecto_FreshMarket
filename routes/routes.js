import express from 'express';
import ControllerUsuario from './../controller/usuario.js';
const Routes = express.Router();

Routes.use('/usuario', ControllerUsuario);

export default Routes;