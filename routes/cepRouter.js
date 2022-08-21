const { Router } = require('express')
const cepControllers = require('../controllers/cepControllers')
const CepRoutes = Router()
const { validatePost } = require('../middleware/validatePost')
const { validateCep } = require('../middleware/validateCep')

CepRoutes.get('/:cep', validateCep, cepControllers.getByCep)
CepRoutes.post('/', validatePost, cepControllers.create)




module.exports = CepRoutes