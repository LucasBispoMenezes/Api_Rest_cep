const joi = require('joi')

const schema = joi.object({
  cep: joi.number().min(8).max(8)
})

module.exports = schema