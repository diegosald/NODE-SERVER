const express = require('express');
const router = express.Router();

//const modelCon = require('../models/model_consultas')
const controlerCon = require("../controlers/controler_consulta")


router.get('/', controlerCon.findAll)
router.post('/', controlerCon.conAdd)
router.delete('/borrar/:id', controlerCon.conDel)
router.put('/leido/:id', controlerCon.conLeido)


module.exports = router