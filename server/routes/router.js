const { Router } = require('express');
const { Schema } = mongoose;
const express=require('express');
const route=express.Router();

const services = require('../services/render');
const controller = require('../controller/controller'); 

route.get('/', services.homeRoutes);

//add people
route.get('/add-people', services.add_people);

//update people
route.get('/update-people', services.update_people);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;
