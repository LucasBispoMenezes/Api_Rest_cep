const { Router } = require('express')
const cepControllers = require('../controllers/cepControllers')
const CepRoutes = Router()
const bodyParser = require('body-parser')

CepRoutes.use(bodyParser.json())
const { validateCep } = require('../middleware/validateCep')
CepRoutes.get('/:cep', validateCep, cepControllers.getByCep)
CepRoutes.post('/', cepControllers.create)




module.exports = CepRoutes