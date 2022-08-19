const { Router } = require('express')
const cepControllers = require('../controllers/cepControllers')
const CepRoutes = Router()

const { validateCep } = require('../middleware/validateCep')
CepRoutes.get('/:cep',validateCep, cepControllers.getByCep)




module.exports = CepRoutes