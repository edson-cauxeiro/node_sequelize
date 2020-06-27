const express = require('express');
//Chamando os Controllers
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');



const routes = express.Router();
//Rotas de Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
//Rotas de Addresses
routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);
//Rotas de Addresses
routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);
//Rotas de Reports
routes.get('/report', ReportController.show);

module.exports = routes;