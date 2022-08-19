const cepModel = require('../models/cepModel')

const serialize = (obj) => {
  return {
    ...obj,
    cep: obj.cep.splice(5, 0, '-')
  }
}
const getByCep = async (cep) => {
  const dataCep = await cepModel.getByCep(cep)
  if (dataCep.length === 0) {
    return false
  }
  return serialize(dataCep);
}

module.exports = {
  getByCep
}