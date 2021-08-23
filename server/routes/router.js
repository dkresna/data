const express = require('express');
const route = express.Router()
const controller = require('../controller/controller');
const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description cari berdasarkan BPS
 *  @method GET /Cari-BPS
 */
 route.get('/Cari-BPS', services.CariBPS)

 route.get('/api/bps', controller.find);
 
 route.get('/api/bps', controller.get);

 

 







module.exports = route