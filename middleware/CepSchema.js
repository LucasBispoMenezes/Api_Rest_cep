const joi = require('joi')

const schema = joi.object({
  cep: joi.string().min(2).required(),
  logradouro: joi.string().min(2).required(),
  bairro: joi.string().min(2).required(),
  localidade: joi.string().min(2).required(),
  uf: joi.string().min(2).required(),
})

module.exports = schema